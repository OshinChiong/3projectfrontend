import React from "react";
import { post } from "../authService/authService";
import { useNavigate } from "react-router-dom";

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
          navigate("/")
        })
        .catch((err) => {
          console.log("Something went wrong", err.message);
        });
}

  return (
    <>
      <h2 style={{ textAlign: "center" }}> Log In </h2>

      <form onSubmit={checkFields} style={{ textAlign: "center" }}>
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
  
        <button> Log In </button>
        <p>{}</p>
      </form>
    </>
  );
};

export default Login;