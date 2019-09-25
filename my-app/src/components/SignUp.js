import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CV from "../imgs/largelogo.png";
import Navigation from './Navigation'

const SignUp = props => {
const [user, setUser] = useState(null)

const handleChange = e => {
  e.preventDefault()
  setUser({...user, [e.target.name]: e.target.value })
}

const handleSubmit = e => {
  e.preventDefault()
  axios
  .post('https://gcj2-college-value.herokuapp.com/users/users',  `grant_type=password&username=${user.username}&password=${user.password}`, {
    headers: {
      Authorization: 'Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(res => {
      
      props.history.push('/login')
      
      
      
  })
  .catch( err => console.log(err.response))
}

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
      <form   onSubmit={handleSubmit} className="loginForm">
        <h2>Username:</h2>
        <input type="text" name="username" placeholder="username"  onChange={handleChange}/>
        <h2>Password:</h2>
        <input type="password" name="password" placeholder="password"  onChange={handleChange}/>
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