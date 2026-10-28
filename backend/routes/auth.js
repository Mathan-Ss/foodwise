const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

const router = express.Router()

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body

    // Check that all fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      })
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered"
      })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    })

    // Save user to MongoDB
    await newUser.save()

    res.status(201).json({
      message: "User registered successfully!"
    })

  } catch (error) {
    console.log("Registration error:", error.message)

    res.status(500).json({
      message: "Server error"
    })
  }
})
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    // Check that all fields are provided
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      })
    }

    // Find user by email
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password"
      })
    }

    // Compare entered password with hashed password
    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    )

    if (!passwordMatch) {
      return res.status(400).json({
        message: "Invalid email or password"
      })
    }

    // Create JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    )

    res.json({
      message: "Login successful",
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    })

  } catch (error) {
    console.log("Login error:", error.message)

    res.status(500).json({
      message: "Server error"
    })
  }
})

module.exports = router