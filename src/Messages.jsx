
import { Link } from "react-router-dom"

function Messages() {
  const messages = [
    {
      name: "Arun Kumar",
      food: "Vegetable Rice",
      message: "Hi, is this food still available?",
      time: "10 min ago",
      status: "Pending"
    },
    {
      name: "Priya S",
      food: "Fresh Idli",
      message: "I would like to claim this food.",
      time: "1 hour ago",
      status: "Pending"
    },
    {
      name: "Rahul M",
      food: "Vegetable Meals",
      message: "Thank you for sharing the food!",
      time: "Yesterday",
      status: "Accepted"
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

      <main className="messages-page">
        <section className="messages-header">
          <p className="small-title">YOUR INBOX</p>

          <h1>Messages</h1>

          <p>
            Manage food requests and connect with people
            in your community.
          </p>
        </section>

        <section className="messages-container">
          <div className="messages-title">
            <h2>Food Requests</h2>

            <span>{messages.length} messages</span>
          </div>

          <div className="message-list">
            {messages.map((message, index) => (
              <div className="message-card" key={index}>
                <div className="message-avatar">
                  {message.name.charAt(0)}
                </div>

                <div className="message-content">
                  <div className="message-top">
                    <div>
                      <h3>{message.name}</h3>
                      <p className="message-food">
                        Interested in: <strong>{message.food}</strong>
                      </p>
                    </div>

                    <span className="message-time">
                      {message.time}
                    </span>
                  </div>

                  <p className="message-text">
                    {message.message}
                  </p>

                  <div className="message-bottom">
                    <span
                      className={
                        message.status === "Accepted"
                          ? "request-status accepted"
                          : "request-status pending"
                      }
                    >
                      {message.status}
                    </span>

                    {message.status === "Pending" && (
                      <div className="message-actions">
                        <button className="accept-btn">
                          Accept
                        </button>

                        <button className="reject-btn">
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

