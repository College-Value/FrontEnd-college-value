import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import PhotoCard from "./PhotoCard";
import college1 from "../imgs/college1.png";
import college2 from "../imgs/college 2.png";
import college3 from "../imgs/college3.jpg";

const Home = () => {
  return (
    <div className="homePage">
      <Navigation />
      <header>
        <h1>College Value Predictor</h1>
          </header>
      <PhotoCard />
      <div className="homepageContent">
        <div className="callToAction">
          <span>
            <p>Time to make one of the biggest decisions of your life. <br></br>{" "}
           Unlock the power of data science to predict which college is best for
            you.</p>
          </span>
          <Link to="/signup">
            <button className="sign-up-btn">Sign Up</button>
          </Link>
          <section> or </section>
          <Link to="/login">
            <button className="log-in-btn">Log in</button>
          </Link>
        </div>

        <div className="div1">
          <p>
            {" "}
            <i className="fas fa-balance-scale-left"></i> <br></br>Choosing a
            college is an emotional decision, use the predictor to focus on
            facts
          </p>

          <img src={college1} width="300" alt="college graduate icon" />
        </div>

        <div className="div2">
          <p>
            <i className="fas fa-piggy-bank"></i> <br></br> Save money and time
            by making sure the cost of your college education aligns with your
            life plans
          </p>
          <img src={college2} width="400" alt="stack of coins" />
        </div>

        <div className="div1">
          <p>
            {" "}
            <i className="fas fa-graduation-cap"></i> <br></br> Find out which
            college will help you achieve your goals with the least amount of
            debt possible
          </p>

          <img className='lastIMG' src={college3} width="400" alt="ten dollar bills" />
        </div>
      </div>
    </div>
  );
};

export default Home;
