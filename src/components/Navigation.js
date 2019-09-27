import React from "react";
import { Link } from "react-router-dom";
import CV from "../imgs/largelogo.png";
import { logout } from "../helpers/Logout";
import About from './About'
import Profile from './Profile/Profile'




const Navigation = () => {
  return (
    <div>
      <section>


        <div className="nav">
          <div>
            <img src={CV} width="60" height="60" alt="college value logo" />
          </div>
          <div>
            <Link to="/">Home</Link>
          </div>

          <div>
            <Link to="/about" alt="about page">About</Link>
          </div>
          <div>

            <Link to="/profile" >
              Profile (Admin Only)
            </Link>
          </div>
          <div>
           

            <Link to="/login" alt="predictions">Sign In</Link>

          </div>
          <div>
            <Link to="/signup" alt="signup page">Sign Up</Link>
          </div>
          <div>
            <Link to="/" onClick={logout}>
              Sign Out
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navigation;
