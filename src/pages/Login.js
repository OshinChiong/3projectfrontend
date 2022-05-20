import React from "react";
import { post } from "../authService/authService";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
 
  const navigate = useNavigate();

  function checkFields(e) {
    e.preventDefault();
    console.log("logIn", username, password)
    post("/users/login", {
      
        username: username,
        password: password
    
      })
        .then((results) => {
          console.log("Results", results.data.token);
          localStorage.setItem('authToken', results.data.token);
          navigate("/reservation")
        })
        .catch((err) => {
          console.log("Something went wrong", err.message);
        });
}

  return (
    <>
     <div className="register" style={{ padding: "70px" }}>
        <div className="wrapper">
          <div className="logo">
            {" "}
      <h2 className="text-center mt-4 name"> Log In </h2>
      
      <form onSubmit={checkFields} style={{ textAlign: "center" }}>

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
      <span className="fas fa-key"></span>{" "}
      <label> Password </label>
    <input 
    onChange={(e) => setPassword (e.target.value)}
    name="username"
    placeholder="password"
    value={password}
    />
    </div> 
        <button className="btn mt-3" type="submit"> Log In </button>
        <p>{}</p>
      
  <div className="container signin">
   <p> Don't have an account? <a className="create" href="/signup"> Sign up </a> .</p>
    </div>
      </form>
      <div className="text-center fs-6"> </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Login;