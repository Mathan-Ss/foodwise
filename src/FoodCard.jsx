import { Link } from "react-router-dom"

function FoodCard({ image, name, quantity, location, expiry }) {
  const foodSlug = name.toLowerCase().replaceAll(" ", "-")

  return (
    <div className="food-card">
      <img src={image} alt={name} />

      <div className="food-content">
        <div className="food-top">
          <h3>{name}</h3>
          <span className="expiry">{expiry}</span>
        </div>

        <p className="quantity">{quantity}</p>

        <p className="location">
          📍 {location}
        </p>

        <Link
          to={`/food/${foodSlug}`}
          className="card-btn"
        >
          View Food
        </Link>
      </div>
    </div>
  )
}

export default FoodCard