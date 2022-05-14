import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import FullCalendar from "./components/FullCalendar";
import Rental from "./components/Rental";
import RentalDetails from "./components/RentalDetails";
import Footer from "./pages/Footer";
import Join from "./components/Join";
import Calendar from "./components/Calendar";


function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Log in</Link>
          <Link to="/reservation"> Reserve a field   </Link>
          <Link to="/join"> Join a team </Link>
          <Link to="/fullCalendar"> Full Calendar </Link>
          <Link to="/Calendar">  Calendar </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reservation" element={<Rental />} />
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/fullcalendar" element={<FullCalendar />} />
        <Route path="/reservationDetails" element={<RentalDetails />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
