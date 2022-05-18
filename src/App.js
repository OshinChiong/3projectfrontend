import React from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import FullCalendar from "./components/FullCalendar";
import Rental from "./components/Rental";
import RentalDetails from "./components/RentalDetails";
import Clock from "./components/Clock";
import Footer from "./pages/Footer";
import Join from "./components/Join";
import Reservations from "./components/Reservations";
import Delete from "./pages/Delete";



function App() {

const navigate = useNavigate()

let token = localStorage.getItem("authToken")
 console.log("TOKEN", token )


function logout() {
localStorage.clear()
navigate("/")
 }

  return (
    <div>
      <header>
        {token ? (
          <nav>
            <Link to="/">Home</Link>
            <button onClick={logout}>log out</button>
          </nav>
        ) : (
          <nav>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>
            <Link to="/reservation"> Reserve a field   </Link>
            <Link to="/join"> Join a team </Link>
            <Link to="/details"> Details </Link>
          </nav>
        )}
      </header>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reservation" element={<Rental />} />
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/fullcalendar" element={<FullCalendar />} />

        <Route path="/reserve/:id" element={<RentalDetails />} />
        <Route path="/deleteuser" element={<Delete />} />
        <Route path="/allRentals" element={<RentalDetails />} />
        <Route path="/allRentals/:id" element={<RentalDetails />} />
        <Route path="/view-calendar" element={<RentalDetails />} />
      </Routes>
    
      <Footer />
    </div>
  );
}

export default App;
