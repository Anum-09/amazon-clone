import React from "react";
import Header from "./Header";
import "./Login.css";
import { Link, useHistory } from "react-router-dom"

function Login() {
  return (
    <div className="login">
      {/* <Header /> */}
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a
        /a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      {/* <h1>Login page</h1> */}
    </div>
  );
}

export default Login;
