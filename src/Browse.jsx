import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import FoodCard from "./FoodCard"

function Browse() {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")
    const [foods, setFoods] = useState([])

    const defaultFoods = [
        {
            id: "default-1",
            image:
                "https://images.unsplash.com/photo-1512058564366-18510be2db19",
            name: "Vegetable Rice",
            quantity: "2 servings",
            location: "Coimbatore",
            expiry: "Expires Today",
            category: "Rice"
        },
        {
            id: "default-2",
            image:
                "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
            name: "Fresh Idli",
            quantity: "6 servings",
            location: "Coimbatore",
            expiry: "Expires Tomorrow",
            category: "Breakfast"
        },
        {
            id: "default-3",
            image:
                "https://images.unsplash.com/photo-1547592180-85f173990554",
            name: "Vegetable Meals",
            quantity: "3 servings",
            location: "RS Puram",
            expiry: "Fresh",
            category: "Meals"
        },
        {
            id: "default-4",
            image:
                "https://images.unsplash.com/photo-1601050690597-df0568f70950",
            name: "Chapati",
            quantity: "5 servings",
            location: "Gandhipuram",
            expiry: "Expires Today",
            category: "Breakfast"
        },
        {
            id: "default-5",
            image:
                "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
            name: "Lemon Rice",
            quantity: "3 servings",
            location: "Saibaba Colony",
            expiry: "Expires Tomorrow",
            category: "Rice"
        },
        {
            id: "default-6",
            image:
                "https://images.unsplash.com/photo-1543353071-10c8ba85a904",
            name: "Veg Curry",
            quantity: "2 servings",
            location: "Peelamedu",
            expiry: "Fresh",
            category: "Meals"
        }
    ]

    useEffect(() => {
        const savedListings =
            JSON.parse(localStorage.getItem("foodwiseListings")) || []

        setFoods([
            ...savedListings,
            ...defaultFoods
        ])
    }, [])

    const filteredFoods = foods.filter((food) => {
        if (food.status === "Claimed") {
            return false
        }

        const matchesSearch = food.name
            .toLowerCase()
            .includes(search.toLowerCase())

        const matchesCategory =
            category === "All" || food.category === category

        return matchesSearch && matchesCategory
    })

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

            {/* Browse Header */}

            <main className="browse-page">
                <section className="browse-header">
                    <p className="small-title">DISCOVER SURPLUS FOOD</p>

                    <h1>Browse Food Near You</h1>

                    <p>
                        Find available food, connect with people nearby,
                        and help reduce food waste.
                    </p>
                </section>

                {/* Search */}

                <section className="browse-controls">
                    <input
                        type="text"
                        placeholder="Search food..."
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />

                    <div className="category-buttons">
                        {[
                            "All",
                            "Rice",
                            "Breakfast",
                            "Meals",
                            "Snacks",
                            "Fruits",
                            "Other"
                        ].map((item) => (
                            <button
                                key={item}
                                className={
                                    category === item
                                        ? "active-category"
                                        : ""
                                }
                                onClick={() => setCategory(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Results */}

                <section className="browse-results">
                    <div className="results-heading">
                        <h2>Available Food</h2>

                        <p>{filteredFoods.length} items found</p>
                    </div>

                    {filteredFoods.length > 0 ? (
                        <div className="food-grid">
                            {filteredFoods.map((food) => (
                                <FoodCard
                                    key={food.id}
                                    image={food.image}
                                    name={food.name}
                                    quantity={food.quantity}
                                    location={food.location}
                                    expiry={food.expiry}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <h3>No food found</h3>

                            <p>
                                Try searching for something else.
                            </p>
                        </div>
                    )}
                </section>
            </main>
        </div>
    )
}

export default Browse