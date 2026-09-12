
import { Link } from "react-router-dom"

function Profile() {
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

      <main className="profile-page">
        <section className="profile-header">
          <p className="small-title">YOUR ACCOUNT</p>

          <h1>Profile</h1>

          <p>
            Manage your FoodWise profile and see your contribution
            to reducing food waste.
          </p>
        </section>

        <section className="profile-container">
          <div className="profile-card">
            <div className="profile-avatar">
              M
            </div>

            <div className="profile-info">
              <h2>Mathan</h2>
              <p>FoodWise Member</p>
              <span>📍 Coimbatore</span>
            </div>

            <button className="edit-profile-btn">
              Edit Profile
            </button>
          </div>

          <div className="profile-stats">
            <div className="profile-stat">
              <h3>12</h3>
              <p>Food Shared</p>
            </div>

            <div className="profile-stat">
              <h3>8</h3>
              <p>Food Claimed</p>
            </div>

            <div className="profile-stat">
              <h3>5.4 kg</h3>
              <p>Waste Reduced</p>
            </div>
          </div>

          <div className="account-section">
            <h2>Account Information</h2>

            <div className="account-row">
              <div>
                <span className="account-label">Name</span>
                <p>Mathan</p>
              </div>

              <button className="account-edit">
                Edit
              </button>
            </div>

            <div className="account-row">
              <div>
                <span className="account-label">Email</span>
                <p>mathan@example.com</p>
              </div>

              <button className="account-edit">
                Edit
              </button>
            </div>

            <div className="account-row">
              <div>
                <span className="account-label">Location</span>
                <p>Coimbatore</p>
              </div>

              <button className="account-edit">
                Edit
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Profile
