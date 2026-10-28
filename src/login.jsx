import { Link } from "react-router-dom"
import { useState } from "react"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            )

            const data = await response.json()

            console.log(data)

            if (response.ok) {
                alert("Login successful!")
            } else {
                alert(data.message)
            }

        } catch (error) {
            console.log("Login error:", error)
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
                    <Link to="/my-listings">My Listings</Link>
                    <Link to="/messages">Messages</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/impact">Impact</Link>
                </nav>

            </header>


            <main className="auth-page">

                <div className="auth-card">

                    <p className="small-title">
                        WELCOME BACK
                    </p>

                    <h1>
                        Login to FoodWise
                    </h1>

                    <p>
                        Continue sharing food and reducing food waste.
                    </p>


                    <form onSubmit={handleLogin}>

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
                            placeholder="Enter your password"
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
                            Login
                        </button>

                    </form>


                    <p>
                        Don't have an account?{" "}
                        <Link to="/register">
                            Create an account
                        </Link>
                    </p>

                </div>

            </main>

        </div>
    )
}

export default Login