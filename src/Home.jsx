import FoodCard from "./FoodCard"
import { Link } from "react-router-dom"
function Home() {
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

            <main>
                <section className="hero">
                    <div>
                        <p className="hero-tag">SMART FOOD. LESS WASTE.</p>

                        <h1>
                            Save Food.
                            <br />
                            Share Goodness.
                        </h1>

                        <p className="hero-text">
                            Discover surplus food near you and help reduce food waste
                            by sharing what you have.
                        </p>

                        <button className="primary-btn">Explore Food</button>
                    </div>
                </section>

                <section className="food-section">
                    <div className="section-heading">
                        <div>
                            <p className="small-title">AVAILABLE NEAR YOU</p>
                            <h2>Fresh Food Waiting to Be Rescued</h2>
                        </div>

                        <button className="view-btn">View All</button>
                    </div>

                    <div className="food-grid">
                        <FoodCard
                            image="https://images.unsplash.com/photo-1512058564366-18510be2db19"
                            name="Vegetable Rice"
                            quantity="2 servings"
                            location="Coimbatore"
                            expiry="Expires Today"
                        />

                        <FoodCard
                            image="https://images.unsplash.com/photo-1589302168068-964664d93dc0"
                            name="Fresh Idli"
                            quantity="6 servings"
                            location="Coimbatore"
                            expiry="Expires Tomorrow"
                        />

                        <FoodCard
                            image="https://images.unsplash.com/photo-1547592180-85f173990554"
                            name="Vegetable Meals"
                            quantity="3 servings"
                            location="RS Puram"
                            expiry="Fresh"
                        />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home