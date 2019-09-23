import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import CV from '../imgs/collegeValue.png'

const Login = props => {
  return (
    <div className='loginPage'>
        <Link className='titleLink' to='/'>
      <h1 className="LoginTitle"><img src={CV} width='60' height='60' />College Value</h1>
      </Link>
      <form className="loginForm">
        <h2>Username:</h2>
        <input type="text" name="username" placeholder="username" />
        <h2>Password:</h2>
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Log In</button>
      </form>
      <div>
          <p> Don't have an account?</p>
      
          <Link className='loginSignUpLink' to='/signup'> Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
