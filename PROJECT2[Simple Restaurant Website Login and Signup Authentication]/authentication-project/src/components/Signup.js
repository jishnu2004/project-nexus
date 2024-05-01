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

//             await axios.post("http://localhost:8000/signup",{
//                 email,password
//             })
//             .then(res=>{
//                 if(res.data=="exist"){
//                     alert("User already exists")
//                 }
//                 else if(res.data=="notexist"){
//                     history("/home",{state:{id:email}})
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

//             <h1>Signup</h1>

//             <form action="POST">
//                 <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
//                 <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
//                 <input type="submit" onClick={submit} />

//             </form>

//             <br />
//             <p>OR</p>
//             <br />

//             <Link to="/">Login Page</Link>

//         </div>
//     )
// }

// export default Login


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import "./Signup.css"; // Import your CSS file

function Signup() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        email,
        password,
      });

      if (response.data === "exist") {
        alert("User with this email already exists.");
      } else if (response.data === "success") {
        history("/home", { state: { id: email } }); // Assuming successful signup redirects to home
      } else {
        alert("An error occurred during signup. Please try again."); // More specific error message
      }
    } catch (e) {
      console.error(e);
      alert("An error occurred. Please try again later."); // User-friendly error message
    }
  }

  return (
    <div className="signup-container">
      <h1 className="signup-title">Join the SHINSHO Family</h1>

      <form action="POST" className="signup-form">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="signup-input"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="signup-input"
          required
        />
        <input type="submit" onClick={submit} value="Sign Up" className="signup-button" />
      </form>

      <p className="signup-or">OR</p>

      <Link to="/" className="login-link">
        Already a Member? Login Here
      </Link>
    </div>
  );
}

export default Signup;
