import React from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useParams  } from "react-router-dom";

const Rental = () => {
  const [field, setField] = React.useState({});
  // const [date, setDate] = React.useState(null);
  // const [players, setPlayers] = React.useState("");
  // const [name, setName] = React.useState("");
  // const [username, setUsername] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const [error, setError] = React.useState(false);
 
  const params  = useParams();

    React.useEffect(() => {
        axios
          .get("http://localhost:5001")
          .then((results) =>  setField(results.data))
          .catch((err) => 
            console.error(err.message));
      }, []);
 


      return (
        <div>
        <Link to="/"> home  </Link>
        <h1> Book a field  </h1>

          {/* <img src={field.image_url}/> */}
          <p> {field.size}</p>
          <p> {field.date}</p>
          <p> {field.time}</p>
          <p> {field.price}</p>
          <p> {field.players}</p>
         
        </div>
    )
}

    //   return (
    //     <form onSubmit={Rental} >
    //       <label> Name  </label>
    //     <input 
    //     onChange={(e) => setName (e.target.value)}
    //     name="Name"
    //     value={name}
    //     />
    //     <label> Username </label>
    //     <input 
    //     onChange={(e) => setUsername(e.target.value)}
    //     name="username"
    //     value={username}
    //     />
    //       <label> Days you are available </label>
    //     <input 
    //     onChange={(e) => setDate (e.target.value)}
    //     name="date"
    //     value={date}
    //     />
    //      <label> Time you are available  </label>
    //     <input 
    //     onChange={(e) => setTime (e.target.value)}
    //     name="Time"
    //     value={time}
    //     />
       
    //      <button> Book a Field </button>
    //      <p> {} </p>
    //     </form>
    // );
    // };



export default Rental;





    



