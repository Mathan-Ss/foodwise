
import { Link } from "react-router-dom"

function MyListings() {
  const listings = [
    {
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19",
      name: "Vegetable Rice",
      quantity: "2 servings",
      location: "Coimbatore",
      expiry: "Expires Today",
      status: "Available"
    },
    {
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
      name: "Fresh Idli",
      quantity: "6 servings",
      location: "Coimbatore",
      expiry: "Expires Tomorrow",
      status: "Available"
    },
    {
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554",
      name: "Vegetable Meals",
      quantity: "3 servings",
      location: "RS Puram",
      expiry: "Fresh",
      status: "Claimed"
    }
  ]

  return (
    <div>
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

      <main className="listings-page">
        <section className="listings-header">
          <div>
            <p className="small-title">YOUR FOOD</p>

            <h1>My Listings</h1>

            <p>
              Manage the food you have shared with the FoodWise community.
            </p>
          </div>

          <Link to="/add-food" className="add-listing-btn">
            + Add Food
          </Link>
        </section>

        <section className="listings-summary">
          <div className="summary-card">
            <h3>{listings.length}</h3>
            <p>Total Listings</p>
          </div>

          <div className="summary-card">
            <h3>
              {listings.filter((food) => food.status === "Available").length}
            </h3>
            <p>Available</p>
          </div>

          <div className="summary-card">
            <h3>
              {listings.filter((food) => food.status === "Claimed").length}
            </h3>
            <p>Claimed</p>
          </div>
        </section>

        <section className="listings-section">
          <div className="listings-title">
            <h2>Your Food Listings</h2>
            <p>{listings.length} items</p>
          </div>

          <div className="listings-grid">
            {listings.map((food) => (
              <div className="listing-card" key={food.name}>
                <img src={food.image} alt={food.name} />

                <div className="listing-content">
                  <div className="listing-top">
                    <h3>{food.name}</h3>

                    <span
                      className={
                        food.status === "Available"
                          ? "status available"
                          : "status claimed"
                      }
                    >
                      {food.status}
                    </span>
                  </div>

                  <p className="listing-quantity">
                    {food.quantity}
                  </p>

                  <p className="listing-location">
                    📍 {food.location}
                  </p>

                  <p className="listing-expiry">
                    {food.expiry}
                  </p>

                  <div className="listing-actions">
                    <button className="edit-btn">
                      Edit
                    </button>

                    <button className="remove-btn">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default MyListings

