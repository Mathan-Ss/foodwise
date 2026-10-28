import { Link } from "react-router-dom"
import { useState } from "react"

function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        }
      )

      const data = await response.json()

      console.log(data)

      if (response.ok) {
        alert("Registration successful!")
      } else {
        alert(data.message)
      }

    } catch (error) {
      console.log("Registration error:", error)
      alert("Unable to connect to server")
    }
  }

  return (
    <div>

      <header className="navbar">

        <h2 className="logo">
          FoodWise
        </h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/browse">Browse</Link>
          <Link to="/add-food">Add Food</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/register">Register</Link>
        </nav>

      </header>


      <main className="auth-page">

        <div className="auth-card">

          <p className="small-title">
            JOIN FOODWISE
          </p>

          <h1>
            Create an Account
          </h1>

          <p>
            Join the community and help reduce food waste.
          </p>


          <form onSubmit={handleRegister}>

            <label>
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              required
            />


            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />


            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              required
            />


            <button
              type="submit"
              className="claim-btn"
            >
              Create Account
            </button>

          </form>


          <p>
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>

        </div>

      </main>

    </div>
  )
}

export default Register