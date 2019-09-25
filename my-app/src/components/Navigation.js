import React from 'react';
import { Link } from "react-router-dom";
import CV from "../imgs/largelogo.png";
import "../../src/App.css"




const Navigation = () => {
  return (
    <div>
      <section className="nav">

        <img src={CV} width="60" height="60" alt="college value logo" />

        <div>
          <Link to="/collegepage" alt="predictions">Get Your Predictions</Link>
        </div>
        <div>
          <Link to="/about" alt="about page">About</Link>

        </div>
        <div>
          <Link to="/signup" alt="signup page">Sign Up</Link>
        </div>
      </section>
    </div>
  );
};

export default Navigation;
