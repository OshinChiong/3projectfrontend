import React from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Join = () => {
    const [username, setUsername] = React.useState("");
    const [user, setUser] = React.useState("");
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const navigate = useNavigate();


    function Join() {
        axios
        .get("http://localhost:5001")
        .then((results) => (results.data))
        .catch((err) => console.log(err.message));
    };
    

return (
    <form onSubmit={Join} >
    <label> Username </label>
    <input 
    onChange={(e) => setUsername(e.target.value)}
    name="username"
    value={username}
    />
      <label> Days you are available </label>
    <input 
    onChange={(e) => setDate (e.target.value)}
    name="date"
    value={date}
    />
     <label> Time you are available  </label>
    <input 
    onChange={(e) => setTime (e.target.value)}
    name="Time"
    value={time}
    />
   
     <button> Join to team </button>
     <p> {} </p>
    </form>
);
};



export default Join;