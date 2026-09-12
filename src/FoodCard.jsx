function FoodCard({ image, name, quantity, location, expiry }) {
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

        <button className="card-btn">View Food</button>
      </div>
    </div>
  )
}

export default FoodCard