import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CV from "../imgs/largelogo.png";
import Navigation from './Navigation'

const SignUp = props => {
  return (
    <div className="loginPage">
      <Navigation />
      <Link className="titleLink" to="/">
        <h1 className="LoginTitle">
          <img src={CV} width="60" height="60" alt="college value logo"/>
          College Value
        </h1>
      </Link>
      <p className="pageDesc">Sign Up</p>
      <form className="loginForm">
        <h2>Username:</h2>
        <input type="text" name="username" placeholder="username" />
        <h2>Password:</h2>
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <p className='question'> Already have an account?</p>

        <Link className="loginSignUpLink" to="/login">
          {" "}
          Log In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;