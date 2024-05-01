// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import { useNavigate, Link } from "react-router-dom"


// function Login() {

//     const history=useNavigate();

//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')

//     async function submit(e){
//         e.preventDefault();

//         try{

//             await axios.post("http://localhost:8000/",{
//                 email,password
//             })
//             .then(res=>{
//                 if(res.data=="exist"){
//                     history("/home",{state:{id:email}})
//                 }
//                 else if(res.data=="notexist"){
//                     alert("User have not sign up")
//                 }
//             })
//             .catch(e=>{
//                 alert("wrong details")
//                 console.log(e);
//             })

//         }
//         catch(e){
//             console.log(e);

//         }

//     }


//     return (
//         <div className="login">

//             <h1>Login</h1>

//             <form action="POST">
//                 <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
//                 <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
//                 <input type="submit" onClick={submit} />

//             </form>

//             <br />
//             <p>OR</p>
//             <br />

//             <Link to="/signup">Signup Page</Link>

//         </div>
//     )
// }

// export default Login

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import "./Login.css"; // Import your CSS file

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/", {
        email,
        password,
      });

      if (response.data === "exist") {
        history("/home", { state: { id: email } });
      } else if (response.data === "notexist") {
        alert("User has not signed up yet.");
      } else {
        alert("Incorrect email or password."); // More specific error message
      }
    } catch (e) {
      console.error(e);
      alert("An error occurred. Please try again later."); // User-friendly error message
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome Back to SHINSHO RESTAURANT</h1>

      <form action="POST" className="login-form">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="login-input"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="login-input"
          required
        />
        <input type="submit" onClick={submit} value="Login" className="login-button" />
      </form>

      <p className="login-or">OR</p>

      <Link to="/signup" className="signup-link">
        New User? Sign Up Here
      </Link>
    </div>
  );
}

export default Login;
