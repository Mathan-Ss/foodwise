import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Messages() {

  const defaultMessages = [
    {
      name: "Arun Kumar",
      food: "Vegetable Rice",
      message: "Hi, is this food still available?",
      time: "10 min ago",
      status: "Pending",
      type: "claim"
    },

    {
      name: "Priya S",
      food: "Fresh Idli",
      message: "I would like to claim this food.",
      time: "1 hour ago",
      status: "Pending",
      type: "claim"
    },

    {
      name: "Rahul M",
      food: "Vegetable Meals",
      message: "Thank you for sharing the food!",
      time: "Yesterday",
      status: "Accepted",
      type: "claim"
    }
  ]


  const [messages, setMessages] =
    useState(defaultMessages)


  // ================================
  // LOAD SAVED DATA
  // ================================

  useEffect(() => {

    const savedMessages =
      JSON.parse(
        localStorage.getItem("foodwiseMessages")
      ) || []


    const savedRequests =
      JSON.parse(
        localStorage.getItem("foodwiseRequests")
      ) || []


    setMessages([
      ...savedRequests,
      ...savedMessages,
      ...defaultMessages
    ])

  }, [])


  // ================================
  // UPDATE REQUEST STATUS
  // ================================

  const updateStatus = (index, newStatus) => {
    const updatedMessages = [...messages]

    const selectedMessage = updatedMessages[index]

    updatedMessages[index] = {
      ...selectedMessage,
      status: newStatus
    }

    setMessages(updatedMessages)

    // Update request status
    const requests =
      JSON.parse(localStorage.getItem("foodwiseRequests")) || []

    const updatedRequests = requests.map((request) => {
      if (request.id === selectedMessage.id) {
        return {
          ...request,
          status: newStatus
        }
      }

      return request
    })

    localStorage.setItem(
      "foodwiseRequests",
      JSON.stringify(updatedRequests)
    )

    // If request is accepted, mark the food as claimed
    if (newStatus === "Accepted") {
      const listings =
        JSON.parse(localStorage.getItem("foodwiseListings")) || []

      const updatedListings = listings.map((food) => {
        if (food.id === selectedMessage.foodId) {
          return {
            ...food,
            status: "Claimed"
          }
        }

        return food
      })

      localStorage.setItem(
        "foodwiseListings",
        JSON.stringify(updatedListings)
      )
    }
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

          <Link to="/">
            Home
          </Link>

          <Link to="/browse">
            Browse
          </Link>

          <Link to="/add-food">
            Add Food
          </Link>

          <Link to="/my-listings">
            My Listings
          </Link>

          <Link to="/messages">
            Messages
          </Link>

          <Link to="/profile">
            Profile
          </Link>

          <Link to="/impact">
            Impact
          </Link>

        </nav>

      </header>


      {/* ================================
          MESSAGES PAGE
      ================================ */}

      <main className="messages-page">


        {/* HEADER */}

        <section className="messages-header">

          <p className="small-title">
            YOUR INBOX
          </p>


          <h1>
            Messages
          </h1>


          <p>
            Manage food requests and connect with
            people in your community.
          </p>

        </section>



        {/* MESSAGE CONTAINER */}

        <section className="messages-container">


          {/* TITLE */}

          <div className="messages-title">

            <h2>
              Food Requests
            </h2>


            <span>
              {messages.length} messages
            </span>

          </div>



          {/* MESSAGE LIST */}

          <div className="message-list">


            {messages.map((message, index) => (

              <div
                className="message-card"
                key={index}
              >


                {/* AVATAR */}

                <div className="message-avatar">

                  {message.name.charAt(0)}

                </div>



                {/* CONTENT */}

                <div className="message-content">


                  {/* TOP */}

                  <div className="message-top">

                    <div>

                      <h3>
                        {message.name}
                      </h3>


                      <p className="message-food">

                        Interested in:

                        {" "}

                        <strong>
                          {message.food}
                        </strong>

                      </p>

                    </div>


                    <span className="message-time">
                      {message.time}
                    </span>

                  </div>



                  {/* MESSAGE */}

                  <p className="message-text">
                    {message.message}
                  </p>



                  {/* BOTTOM */}

                  <div className="message-bottom">


                    {/* STATUS */}

                    <span
                      className={
                        message.status === "Accepted"
                          ? "request-status accepted"

                          : message.status === "Rejected"
                            ? "request-status rejected"

                            : message.status === "Sent"
                              ? "request-status sent"

                              : "request-status pending"
                      }
                    >
                      {message.status}
                    </span>



                    {/* ACTION BUTTONS */}

                    {message.status === "Pending" &&
                      message.direction !== "outgoing" && (
                        <div className="message-actions">
                          <button
                            className="accept-btn"
                            onClick={() =>
                              updateStatus(index, "Accepted")
                            }
                          >
                            Accept
                          </button>

                          <button
                            className="reject-btn"
                            onClick={() =>
                              updateStatus(index, "Rejected")
                            }
                          >
                            Reject
                          </button>
                        </div>
                      )}

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

export default Messages