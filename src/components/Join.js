import React from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { get, post } from "../authService/authService";
// import { Modal, Button } from "react-bootstrap";

const Join = (props) => {
    const [username, setUsername] = React.useState("");
    const [user, setUser] = React.useState("");
    // const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const navigate = useNavigate();


    function Join(rentalId) {
        post(`/rental/${rentalId}/addUser`)
        .then((results) => (results.data))
        .catch((err) => console.log(err.message));
    };
    

    return (
     
              <form className="joinpage">
                <div className="form-group">
                <p> Want to Join a Game? Fill your information below and 
                tells us which day are you available</p>
                  <label htmlFor="title"> Username </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Username"
                    value={props.title}
                    name="title"
                    onChange={props.handleInputChange}
                  />
                  <p className="error">{props.errorTitle}</p>
                </div>
                <div className="form-group">
                  <label> First Name </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name "
                    value={props.firstName}
                    name="firstName"
                    onChange={props.handleInputChange}
                  />
                  <p className="error">{props.errorFirstName}</p>
                </div>
                <div className="form-group">
                  <label> Last Name </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="Last Name"
                    value={props.lastname}
                    name="lastName"
                    onChange={props.handleInputChange}
                  />
                  <p className="error">{props.errorLastName}</p>
                </div>
    
                <div className="form-group">
                  <label htmlFor="date"> Days available </label>
                  <input
                    type="date"
                    className="form-control"
                    id="start"
                    placeholder="YYYY-MM-DD"
                    value={props.time}
                    name="start"
                    onChange={props.handleInputChange}
                  />
                  <p className="error">{props.errorTime}</p>
                </div>
               
                <div className="form-group">
                  <label htmlFor="time"> Time Available  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="time"
                    placeholder="YYYY-MM-DD"
                    value={props.time}
                    name="time"
                    onChange={props.handleInputChange}
                  />
                  <p className="error">{props.errorTime}</p>
                </div>
                {/* <div className="form-group">
                  <label htmlFor="description"> Comments </label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="4"
                    value={props.description}
                    name="description"
                    onChange={props.handleInputChange}
                  ></textarea>
                  <p className="error">{props.errorDescription}</p>
                </div> */}
                {/* <button type="submit"> Add comment </button> */}
                <button onClick={props.save} variant="primary"> Join Game </button>
                   {/* <Button onClick={props.save}>
             Reserve </Button> */}
              <div>

               
              </div>

              
              </form>
           
    

       
      );
    }





export default Join;