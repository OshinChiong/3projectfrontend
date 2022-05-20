import React from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RentalDetails from "./RentalDetails";
import { get, post } from "../authService/authService";
import { useParams  } from "react-router-dom";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

const Rental = () => {
  const [fields, setFields] = React.useState([]);
  const [time, setTime] = React.useState(null);
  const [people, setPeople] = React.useState("");
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
 
  const params  = useParams();

    const [state, setState] = React.useState({
      calendar: true,
      eventSources: [],
      user: "",
      date: new Date(),
      time: "",
      // comment: "",
      showModal: false,
      errorUser: "",
      errorDate: "",
      errorComment: "",
      showCard: false,
      // users: [],
      people: [],
     });


    React.useEffect(() => {
        
          get("/field/view-all")
          .then((results) =>  {
            setFields(results.data);
          })
          .catch((err) => 
            console.error(err.message));
      }, []);
      
      console.log(fields)
    
      return (
        <div className="choose">
        
        <h1> Choose your field size and make a reservation </h1>
        <Link className="nav-link" to="/join"> Join a team </Link>
       
     {fields.map (function(field) {
       return(
        <Link className="link" to={`/reserve/${field._id}`}>    
        <img src='/images1.jpg' alt='fieldImage'/> 
        <p> {field.name} </p>
        <p> ${field.price} </p>
       
        <p>This is one is perfect for {field.players} players  </p>
        </Link>
       )
     }) 
     } 
     {/* <Link to="/field/view-all">    
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
        </Link>   */}
        </div>
    )
      }  
  
    
      

export default Rental;
