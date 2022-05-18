import React from "react";
import { get, post } from "../authService/authService";
import { useNavigate } from "react-router-dom";

const Delete = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [errormessage, setErrormessage] = React.useState('')

    const navigate = useNavigate()

    function checkError (e) {
        e.preventDefault();
        if  (password !== confirmPassword) {
            setErrormessage("your password didn't match")
        } 
        else {
           
            post("/users/delete-user", {
                password: password,
              })
                .then((results) => {

                  localStorage.clear()
                  navigate('/')
                })
                .catch((err) => {
                  console.log("Something went wrong", err.message);
                });
        }
    }
    

  return (
    <div>
          <form
            className="p-3 mt-3"
            // onSubmit={checkError}
            style={{ paddingTop: 100 }}
          >
            <p >Username</p>
            <div>
              {" "}
              <span ></span>{" "}
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <p > Password </p>
            <div>
              {" "}
              <span ></span>{" "}
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p > Confirm Password </p>
            <div>
              {" "}
              <span ></span>{" "}
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button className="btn mt-3" onClick={checkError}> Delete Account</button>
            <button className="btn mt-3" onClick={checkError}> Update  Account</button>
            {/* <p >Email</p>
            <div >
          <button className="btn mt-3" type=button> Delete Account</button>
              {" "}
              <span></span>{" "}
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>{" "} */}
            {/* <button className="btn mt-3" type="submit">
              Update Information
            </button> */}
          </form>
          <div> </div>
        </div>
     
  );
};

export default Delete;