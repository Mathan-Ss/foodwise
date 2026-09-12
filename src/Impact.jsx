
import { Link } from "react-router-dom"

function Impact() {
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

      <main className="impact-page">
        <section className="impact-header">
          <p className="small-title">YOUR CONTRIBUTION</p>

          <h1>Making an Impact 🌱</h1>

          <p>
            Every meal shared helps reduce food waste and
            makes a difference in the community.
          </p>
        </section>

        <section className="impact-stats">
          <div className="impact-card">
            <span className="impact-icon">🍱</span>
            <h2>12</h2>
            <p>Meals Shared</p>
          </div>

          <div className="impact-card">
            <span className="impact-icon">🤝</span>
            <h2>8</h2>
            <p>Meals Claimed</p>
          </div>

          <div className="impact-card">
            <span className="impact-icon">♻️</span>
            <h2>5.4 kg</h2>
            <p>Food Waste Reduced</p>
          </div>

          <div className="impact-card">
            <span className="impact-icon">🌍</span>
            <h2>6</h2>
            <p>People Helped</p>
          </div>
        </section>

        <section className="impact-message">
          <div>
            <p className="small-title">SMALL ACTION. BIG DIFFERENCE.</p>

            <h2>Food saved today can feed someone tomorrow.</h2>

            <p>
              By sharing surplus food instead of throwing it away,
              you are helping reduce waste, save resources, and
              build a more responsible community.
            </p>
          </div>

          <div className="impact-circle">
            <span>🌱</span>
            <strong>Keep Growing</strong>
          </div>
        </section>

        <section className="impact-goal">
          <div className="goal-heading">
            <div>
              <p className="small-title">YOUR MONTHLY GOAL</p>
              <h2>Reduce Food Waste</h2>
            </div>

            <span>12 / 20 meals</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <p>
            You're making great progress. Share 8 more meals
            to reach your monthly goal!
          </p>
        </section>
      </main>
    </div>
  )
}

export default Impact
