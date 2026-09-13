import { Link, useParams } from "react-router-dom"
import { useState } from "react"

function FoodDetails() {
  const [claimed, setClaimed] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("")
  const [messageSent, setMessageSent] = useState(false)

  const { foodName } = useParams()

  // ================================
  // DEFAULT DEMO FOODS
  // ================================

  const defaultFoods = {
    "vegetable-rice": {
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
      name: "Vegetable Rice",
      quantity: "2 servings",
      location: "Coimbatore",
      expiry: "Expires Today",
      category: "Rice",
      description:
        "Freshly prepared vegetable rice available for anyone who can make use of it.",
      owner: "Arun Kumar"
    },

    "fresh-idli": {
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
      name: "Fresh Idli",
      quantity: "6 servings",
      location: "Coimbatore",
      expiry: "Expires Tomorrow",
      category: "Breakfast",
      description:
        "Soft and fresh homemade idlis available for sharing.",
      owner: "Priya S"
    },

    "vegetable-meals": {
      image: "https://images.unsplash.com/photo-1547592180-85f173990554",
      name: "Vegetable Meals",
      quantity: "3 servings",
      location: "RS Puram",
      expiry: "Fresh",
      category: "Meals",
      description:
        "A fresh homemade vegetable meal that is ready to be shared.",
      owner: "Rahul M"
    },

    "chapati": {
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      name: "Chapati",
      quantity: "5 servings",
      location: "Gandhipuram",
      expiry: "Expires Today",
      category: "Breakfast",
      description:
        "Fresh homemade chapatis available for someone nearby.",
      owner: "Karthik R"
    },

    "lemon-rice": {
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
      name: "Lemon Rice",
      quantity: "3 servings",
      location: "Saibaba Colony",
      expiry: "Expires Tomorrow",
      category: "Rice",
      description:
        "Fresh lemon rice prepared at home and available for sharing.",
      owner: "Divya S"
    },

    "veg-curry": {
      image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904",
      name: "Veg Curry",
      quantity: "2 servings",
      location: "Peelamedu",
      expiry: "Fresh",
      category: "Meals",
      description:
        "Fresh homemade vegetable curry available for the community.",
      owner: "Vijay K"
    }
  }

  // ================================
  // GET FOOD FROM LOCAL STORAGE
  // ================================

  const savedListings =
    JSON.parse(localStorage.getItem("foodwiseListings")) || []

  const savedFood = savedListings.find((food) => {
    const slug = food.name
      .toLowerCase()
      .replaceAll(" ", "-")

    return slug === foodName
  })

  const food = savedFood || defaultFoods[foodName]

  // ================================
  // FOOD NOT FOUND
  // ================================

  if (!food) {
    return (
      <div>
        <h1>Food Not Found</h1>

        <Link to="/browse">
          Back to Browse
        </Link>
      </div>
    )
  }

  // ================================
  // CLAIM FOOD
  // ================================

  const claimFood = () => {
    const isOwnFood = food.owner === "You"

    if (isOwnFood) {
      return
    }

    const requestId = Date.now()

    // Request shown to the food owner
    const incomingRequest = {
      id: requestId,
      foodId: food.id,
      name: "Demo User",
      food: food.name,
      message: `I would like to claim ${food.name}.`,
      time: "Just now",
      status: "Pending",
      owner: "You",
      type: "claim",
      direction: "incoming"
    }

    // Request shown to the person who claimed the food
    const outgoingRequest = {
      id: requestId + 1,
      foodId: food.id,
      name: "You",
      food: food.name,
      message: `I would like to claim ${food.name}.`,
      time: "Just now",
      status: "Pending",
      owner: food.owner,
      type: "claim",
      direction: "outgoing"
    }

    const existingRequests =
      JSON.parse(localStorage.getItem("foodwiseRequests")) || []

    localStorage.setItem(
      "foodwiseRequests",
      JSON.stringify([
        incomingRequest,
        outgoingRequest,
        ...existingRequests
      ])
    )

    setClaimed(true)
  }

  // ================================
  // SEND MESSAGE
  // ================================

  const sendMessage = () => {
    if (message.trim() === "") {
      return
    }

    const newMessage = {
      name: "You",
      food: food.name,
      message: message,
      time: "Just now",
      status: "Sent",
      owner: food.owner || "You",
      type: "message"
    }

    const existingMessages =
      JSON.parse(localStorage.getItem("foodwiseMessages")) || []

    localStorage.setItem(
      "foodwiseMessages",
      JSON.stringify([
        newMessage,
        ...existingMessages
      ])
    )

    setMessage("")
    setMessageSent(true)
  }

  return (
    <div>

      {/* ================================
          NAVBAR
      ================================ */}

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


      {/* ================================
          FOOD DETAILS
      ================================ */}

      <main className="food-details-page">

        <Link
          to="/browse"
          className="back-link"
        >
          ← Back to Browse
        </Link>


        <div className="food-details-card">

          {/* IMAGE */}

          <div className="food-details-image">

            <img
              src={food.image}
              alt={food.name}
            />

          </div>


          {/* CONTENT */}

          <div className="food-details-content">

            <span className="details-category">
              {food.category}
            </span>

            <h1>
              {food.name}
            </h1>

            <p className="details-description">
              {food.description ||
                "Fresh food available for someone nearby who can make use of it."}
            </p>


            {/* FOOD INFORMATION */}

            <div className="details-info">

              <div>
                <span>Quantity</span>

                <strong>
                  {food.quantity}
                </strong>
              </div>


              <div>
                <span>Location</span>

                <strong>
                  {food.location}
                </strong>
              </div>


              <div>
                <span>Availability</span>

                <strong>
                  {food.expiry}
                </strong>
              </div>


              <div>
                <span>Owner</span>

                <strong>
                  {food.owner || "You"}
                </strong>
              </div>

            </div>


            {/* BUTTONS */}

            <div className="details-actions">

              <button
                className="claim-btn"
                onClick={claimFood}
                disabled={claimed || food.owner === "You"}
              >
                {food.owner === "You"
                  ? "Your Listing"
                  : claimed
                    ? "Request Sent ✓"
                    : "Claim Food"}
              </button>


              <button
                className="message-btn"
                onClick={() => setShowMessage(true)}
              >
                Message Owner
              </button>

            </div>


            {/* CLAIM SUCCESS */}

            {claimed && (
              <p className="claim-success">
                Your request has been sent to{" "}
                {food.owner || "the owner"}! 🎉
              </p>
            )}


            {/* MESSAGE BOX */}

            {showMessage && (

              <div className="message-box">

                <h3>
                  Message {food.owner || "Owner"}
                </h3>


                <textarea
                  placeholder="Write your message..."
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  rows="4"
                />


                <button
                  className="send-message-btn"
                  onClick={sendMessage}
                >
                  Send Message
                </button>


                {messageSent && (
                  <p className="message-success">
                    Message sent successfully! ✓
                  </p>
                )}

              </div>

            )}

          </div>

        </div>

      </main>

    </div>
  )
}

export default FoodDetails