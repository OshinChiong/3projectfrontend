import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
     <header>
       <nav>
       <Link to="/"> Home </Link>
       <Link to="/signup"> Sign Up  </Link>
       <Link to="/login"> Log In  </Link>
       </nav>
     </header>

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
      
      </Routes>
    </div>
  );
}

export default App;
