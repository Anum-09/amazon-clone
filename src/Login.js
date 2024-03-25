import React, { useState } from "react";
import Header from "./Header";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const login = event => {
  event.prevent.default(); // this stops refresh!!
  auth.signInWithEmailAndPassword(email,password)
    .then((auth)=> {
      //logged in, redirect to homepage
      navigate.push("/")
    })
    .catch((e)=> alert(e.message))
}

const register = event => {
  event.prevent.default(); // this stops refresh!!
  //do the register logic here
  auth.createUserWithEmailAndPassword(email, password)
  .then(auth => {
    //created a user and logged in
    navigate.push("/")
  })
  .catch((e)=> alert(e.message))
}



  return (
    <div className="login">
      {/* <Header /> */}
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
          <h5>Password</h5>  
          <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
        </form>
        <p>
          By Signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, Cookies Notice and out Internet-BAsed Ads
          Notice
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
