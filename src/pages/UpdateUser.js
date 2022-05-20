import React from "react";
import { get, post } from "../authService/authService";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const UpdateUser = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    get("/api/user/edit-user").then((foundUser) => {
      setUsername(foundUser.data.username);
      setEmail(foundUser.data.email);
    });
  }, []);

  const updateUser = (e) => {
    e.preventDefault();
    post(
      "/api/user/edit-user",
      {
        username,
        email,
      },
      { new: true }
    ).then((foundUser) => {
      console.log("We found this user", foundUser.data);
      localStorage.setItem("user", foundUser.data);
      navigate("/profile-page");
    });
  };

  const deleteUser = (e) => {
    e.preventDefault();
    post("/api/user/delete")
      .then(() => {
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="bg-danger" style={{ padding: "70px" }}>
        <div className="wrapper">
          <div className="text-center mt-4 name"> Update Information </div>
          <form
            className="p-3 mt-3"
            onSubmit={updateUser}
            style={{ paddingTop: 100 }}
          >
            <p className="text-center">Username</p>
            <div className="form-field d-flex align-items-center">
              {" "}
              <span className="far fa-user"></span>{" "}
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <p className="text-center">Email</p>
            <div className="form-field d-flex align-items-center">
              {" "}
              <span className="fas fa-key"></span>{" "}
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>{" "}
            <button className="btn mt-3" type="submit">
              Update Information
            </button>
          </form>
          <button className="btn mt-3" onClick={deleteUser}>Delete Account</button>
          <div className="text-center fs-6"> </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;



// const Delete = () => {
//   const [username, setUsername] = React.useState('')
//   const [password, setPassword] = React.useState('')
//   const [confirmPassword, setConfirmPassword] = React.useState('')
//   const [email, setEmail] = React.useState('')
//   const [errormessage, setErrormessage] = React.useState('')

//   const navigate = useNavigate()


// const updateUser = (e) => {
//   e.preventDefault();
//   post(
//     "/users/delete-user",
//     {
//       username,
//       password,
//       confirmPassword
//       // email,
//     },
//     { new: true }
//   ).then((foundUser) => {
//     console.log("We found this user", foundUser.data);
//     localStorage.setItem("user", foundUser.data);
//     navigate("/");
//   });
// };

// return (
//   <div>
//         <form
//           className="p-3 mt-3"
//           // onSubmit={checkError}
//           style={{ paddingTop: 100 }}
//         >
//           <p >Username</p>
//           <div>
//             {" "}
//             <span ></span>{" "}
//             <input
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <p > Password </p>
//           <div>
//             {" "}
//             <span ></span>{" "}
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <p > Confirm Password </p>
//           <div>
//             {" "}
//             <span ></span>{" "}
//             <input
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>

//           <button className="btn mt-3" onClick={CheckError}> Delete Account</button>
//           <button className="btn mt-3" onClick={CheckError}> Update  Account</button>
//           {/* <p >Email</p>
//           <div >
//         <button className="btn mt-3" type=button> Delete Account</button>
//             {" "}
//             <span></span>{" "}
//             <input value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>{" "} */}
//           {/* <button className="btn mt-3" type="submit">
//             Update Information
//           </button> */}
//         </form>
//         <div> </div>
//       </div>
   
// );
//       }

// export default updateUser;