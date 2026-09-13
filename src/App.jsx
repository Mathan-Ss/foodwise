import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddFood from "./AddFood"
import Home from "./Home"
import Browse from "./Browse"
import MyListings from "./MyListings"
import Messages from "./Messages"
import Profile from "./Profile"
import Impact from "./Impact"
import FoodDetails from "./FoodDetails"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/add-food" element={<AddFood />} />
        <Route path="/my-listings" element={<MyListings />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/food/:foodName" element={<FoodDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App