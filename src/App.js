import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Api from "./components/Api";
import Rental from "./components/Rental";
import Footer from "./pages/Footer";


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
          <Link to="/api">Test API</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/api" element={<Api />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
