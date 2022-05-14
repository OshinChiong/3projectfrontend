import React from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useParams  } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";

const Rental = () => {
  const [field, setField] = React.useState({});
  const [date, setDate] = React.useState(null);
  const [time, setTime] = React.useState(null);
  const [players, setPlayers] = React.useState("");
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
 
  const params  = useParams();

    React.useEffect(() => {
        axios
          .get("http://localhost:5001")
          .then((results) =>  setField(results.data))
          .catch((err) => 
            console.error(err.message));
      }, []);

      // function details () {
      //   const [calendar, setCalendar] = React.useState([""]);
      
      //   React.useEffect(() => {
      //     axios
      //       .get("")
      //       .then((results) => {
      //         setCalendar(results.data);
      //       })
      //       .catch((err) => {
      //         console.error(err.message);
      //       });
      //   }, []);
      
      
      return (
        <div>
     <Link to="/reservationDetails">    
        <img src='/images1.jpg' alt='fieldImage'/> 
        <h2> Field for 12 players </h2>
        <p>This is one is perfect for 10-12 players  </p>
        </Link>

     <Link to="/reservationDetails">     
        <img src='/images2.jpg' alt='image2' />
        <h2> Field for 18 players </h2>
        <p> This is one is perfect for 18 players  </p>
        </Link> 

     <Link to="/reservationDetails">   
        <img src='/images3.jpg' alt ='image3'/> 
        <h2> Field for 22 players </h2>
        <p> This is one is perfect for 20-22 players  </p>
        </Link>  
        </div>
    )
      }  
  
     
      

export default Rental;
