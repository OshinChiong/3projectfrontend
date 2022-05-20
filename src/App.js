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
import Join from "./components/Join";

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
          <div>
          </div>
            {/* <Link to="/"> Home</Link>
            <Link className="navbar" to="/signup">Sign up</Link>
            <Link  className="navbar" to="/login">Log in</Link> */}
            {/* <Link className="nav-link" to="/reservation"> Reserve a field   </Link>
            <Link className="nav-link" to="/join"> Join a team </Link> */}
           
            <button className="logout" onClick={logout}> log out
            <span ></span>
            </button>
          </nav>
          
        ) : (
          <nav className="navbar">
           <a href="link">  <Link   to="/">Home</Link> </a>
            <Link  to="/signup">Sign up</Link> 
            {/* <div className="collapse navbar-collapse mx-auto" id="navmenu"> */}
            <Link to="/login">Log in</Link>
          
            {/* <Link to="/reservation"> Reserve a field   </Link>
            <Link to="/join"> Join a team </Link> */}
           
            {/* </div> */}
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
        <Route path="/updateUser" element={<Delete />} />
        <Route path="/allRentals" element={<RentalDetails />} />
        <Route path="/allRentals/:id" element={<RentalDetails />} />
        <Route path="/view-calendar" element={<RentalDetails />} />
      </Routes>
    
    
    </div>
  );
}

export default App;
