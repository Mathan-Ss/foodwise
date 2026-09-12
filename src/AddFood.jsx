
import { useState } from "react"
import { Link } from "react-router-dom"

function AddFood() {
  const [foodName, setFoodName] = useState("")
  const [category, setCategory] = useState("Rice")
  const [quantity, setQuantity] = useState("")
  const [expiry, setExpiry] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    setSubmitted(true)

    setFoodName("")
    setQuantity("")
    setExpiry("")
    setLocation("")
    setDescription("")
    setImage("")
  }

  return (
    <div>
      {/* Navbar */}

      <header className="navbar">
        <h2 className="logo">FoodWise</h2>

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

      {/* Add Food Page */}

      <main className="add-food-page">

        <section className="add-food-header">
          <p className="small-title">SHARE SURPLUS FOOD</p>

          <h1>Give Your Food a Second Chance</h1>

          <p>
            Have extra food? Share it with someone nearby
            instead of letting it go to waste.
          </p>
        </section>

        <section className="food-form-container">

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Food Name</label>

              <input
                type="text"
                placeholder="Example: Vegetable Rice"
                value={foodName}
                onChange={(event) => setFoodName(event.target.value)}
                required
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Category</label>

                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  <option>Rice</option>
                  <option>Breakfast</option>
                  <option>Meals</option>
                  <option>Snacks</option>
                  <option>Fruits</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Quantity</label>

                <input
                  type="text"
                  placeholder="Example: 4 servings"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                  required
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Expiry Date & Time</label>

                <input
                  type="datetime-local"
                  value={expiry}
                  onChange={(event) => setExpiry(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Location</label>

                <input
                  type="text"
                  placeholder="Example: Coimbatore"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label>Food Image URL</label>

              <input
                type="url"
                placeholder="Paste an image URL"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Description</label>

              <textarea
                placeholder="Tell people something about the food..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows="5"
              ></textarea>
            </div>

            <button className="form-submit" type="submit">
              Post Food
            </button>

            {submitted && (
              <div className="success-message">
                Food posted successfully! 🎉
              </div>
            )}

          </form>

        </section>
      </main>
    </div>
  )
}

export default AddFood

