import React from "react";
import { post } from "../authService/authService";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    // const [errorMessage, setErrorMessage] = React.useState("");
    const [email, setEmail] = React.useState("");
    const navigate = useNavigate();

    function checkFields(e) {
        e.preventDefault();
        console.log("signup", email, username, password, confirmPassword)
        post("/users/signup", {
            email: email,
            username: username,
            password: password,
            confirmPassword: confirmPassword
          })
            .then((results) => {
              console.log("Results", results.data.token);
              localStorage.setItem('authToken', results.data.token);
              navigate("/")
            })
            .then((results) => {
              navigate("/reservation")
            })
            .catch((err) => {
              console.log("Something went wrong", err.message);
            });
    }

return (
   
    <div className="register" style={{ padding: "70px" }}>
     <div className="wrapper">
    <h2 style={{ textAlign: "center" }}> Sign up </h2>
    <form 
    onSubmit={checkFields}
    style={{ textAlign: "center" }}
 
     >

     <div className="form-field d-flex align-items-center">
      {" "}
    <span className="far fa-user"> </span>{" "}
    
    <label> Enter Email </label>
    <input 
    onChange={(e) => setEmail (e.target.value)}
    name="Email"
    placeholder="enter email"
    value={email}
    />
    </div>
    
    <div className="form-field d-flex align-items-center">
     {" "}
    <span className="far fa-user"></span>{" "}
    <label> Username </label>
    <input 
    onChange={(e) => setUsername(e.target.value)}
    name="username"
    placeholder="username"
    value={username}
    />
    </div>
    
    <div className="form-field d-flex align-items-center">
     {" "}
    <span className="far fa-user"></span>{" "}
      <label> Password </label>
    <input 
    onChange={(e) => setPassword (e.target.value)}
    name="username"
    placeholder="password"
    value={password}
    />
    </div>


    <div className="form-field d-flex align-items-center">
     {" "}
    <span className="far fa-user"></span>{" "}
     <label> Confirm Password </label>
    <input 
    onChange={(e) => setConfirmPassword (e.target.value)}
    name="confirmPassword"
    placeholder="confirm password"
    value={confirmPassword}
    />
   </div>
     <button className="btn mt-3"> Create Account </button>
     <div className="container signin">
   <p> Have an account? <a className="create" href="/login"> Log In  </a> .</p>
    </div>
     <p> {} </p>
     
    </form>
    </div>
     </div>
);
};


export default Signup;