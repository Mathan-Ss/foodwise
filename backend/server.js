require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const authRoutes = require("./routes/auth")

app.use("/api/auth", authRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!")
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error.message)
  })
  
const PORT = 5000

app.get("/", (req, res) => {
  res.send("FoodWise backend is running!")
})

app.listen(PORT, () => {
  console.log(`FoodWise backend running on http://localhost:${PORT}`)
})