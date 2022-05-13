// import React from "react";



// const Login = () => {
//   const [username, setUsername] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [confirmPassword, setConfirmPassword] = React.useState("");
//   const [errorMessage, setErrorMessage] = React.useState("");

//   const navigate = useNavigate();

//   function register(e) {
//     e.preventDefault();
//     console.log("signup", username, password)
  
//   }

//   return (
//     <>
//       <h2 style={{ textAlign: "center" }}>Signup</h2>

//       <form onSubmit={register} style={{ textAlign: "center" }}>
//         <TextInput
//           action={(e) => setUsername(e.target.value)}
//           name="username"
//           value={username}
//         />
//         <TextInput
//           action={(e) => setPassword(e.target.value)}
//           value={password}
//           name="password"
//         />
//         <TextInput
//           action={(e) => setConfirmPassword(e.target.value)}
//           value={confirmPassword}
//           name="confirmPassword"
//         />
//         <button>Create</button>
//         <p>{errorMessage}</p>
//       </form>
//     </>
//   );
// };

// export default Login;