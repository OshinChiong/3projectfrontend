import React from 'react';
import { post } from '../authService/authService';
import { Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    // const [errorMessage, setErrorMessage] = React.useState("");
    // const [email, setEmail] = React.useState("");
    const navigate = useNavigate();

    function checkFields(e) {
        e.preventDefault();
        console.log("signup", username, password, confirmPassword)
        post("/users/signup", {
            username: username,
            password: password,
          })
            .then((results) => {
              console.log("Results", results.data.token);
              localStorage.setItem('authToken', results.data.token);
              navigate("/")
            })
            .catch((err) => {
              console.log("Something went wrong", err.message);
            });
    }

return (
    <form onSubmit={checkFields} >
      {/* <label> Email </label>
    <input 
    onChange={(e) => setEmail (e.target.value)}
    name="Email"
    value={email}
    /> */}
    <label> Username </label>
    <input 
    onChange={(e) => setUsername(e.target.value)}
    name="username"
    value={username}
    />
      <label> Password </label>
    <input 
    onChange={(e) => setPassword (e.target.value)}
    name="username"
    value={password}
    />
     <label> Confirm Password </label>
    <input 
    onChange={(e) => setConfirmPassword (e.target.value)}
    name="confirmPassword"
    value={confirmPassword}
    />
   
     <button> Create </button>
     <p> {} </p>
    </form>
);
};


export default Signup;