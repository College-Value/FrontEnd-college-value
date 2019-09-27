import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CV from "../imgs/largelogo.png";
import Navigation from "./Navigation";

const Login = props => {
  const [creds, setCreds] = useState({ username: "", password: "" });

  const handleChange = e => {
    e.preventDefault();
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("cred username", creds.username);
    axios
      .post(
        "https://gcj2-college-value.herokuapp.com/login",
        `grant_type=password&username=${creds.username}&password=${creds.password}`,
        {
          headers: {
            Authorization: "Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0",
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        console.log(res.data)
        localStorage.setItem("token", res.data.access_token);
        props.history.push("/collegePage");
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="loginPage">
      <Navigation />
      <Link className="titleLink" to="/">
        <h1 className="LoginTitle">
          <img src={CV} width="60" height="60" alt="college savings logo" />
          College Value
        </h1>
      </Link>
      <p className="pageDesc">Log In</p>
      <form onSubmit={handleSubmit} className="loginForm">
        <h2>Username:</h2>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <h2>Password:</h2>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
      <div>
        <p className="question"> Don't have an account?</p>
        <Link className="loginSignUpLink" to="/signup">
          {" "}
          Sign Up
        </Link>
      </div>
    </div>
  );
};
export default Login;
