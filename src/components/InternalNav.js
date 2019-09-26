import React from "react";
import { Link } from "react-router-dom";
import CV from "../imgs/largelogo.png";
import "../../src/App.css";

const InternalNav = () => {
  return (
    <div>
      <section className="nav">
        <img src={CV} width="60" height="60" />

        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/login">Predictions</Link>
        </div>
        <div>
          <Link to="/signup">Sign Up</Link>
        </div>
      </section>
    </div>
  );
};

export default Navigation;
