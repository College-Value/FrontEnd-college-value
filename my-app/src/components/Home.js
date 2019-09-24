import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../imgs/main-image.jpg";
import Navigation from "./Navigation";
import CV from "../imgs/largelogo.png";
import college1 from '../imgs/college1.png'
import college2 from '../imgs/college 2.png'
import college3 from '../imgs/college3.jpg'


const Home = () => {
  return (
    <div className="homePage">
      <Navigation />
      <header>
        <img src={CV} width="60" height="60" />
        <h1>College Value/Earnings Predictor</h1>
      </header>
      <div className="homepageContent">
        <div className='callToAction'>
        <span>
          Time to make one of the biggest descisions of your lives. <br></br>{" "}
          Use the power of data science to predict which college is best for
          you.
        </span>
        <Link to="/signup">
          <button class="sign-up-btn">Sign Up</button>
        </Link>
        <p> or </p>
        <Link to="/login">
          <button class="log-in-btn">Log in</button>
        </Link>
        </div>
        

        <div className='div1'>
         
          <p> <i class="fas fa-balance-scale-left"></i>{' '}<br></br>Choosing a college is an emotional decision, use the predictor to
            focus on facts</p>
        
          <img src={college1} width='300' />
        </div>

        <div className='div2'>
          
          <p><i class="fas fa-piggy-bank"></i>{' '}<br></br> Save money and time by making sure the cost of your college
            education aligns with your life plans</p>
          <img src={college2} width='400'/>
        </div>

        <div className='div1'>
        
          <p>  <i class="fas fa-graduation-cap"></i>{' '}<br></br> Find out which college will help you achieve your goals with the
            least amount of debt possible</p>
         
          <img src={college3} width='400'/>
        </div>
      </div>
    </div>
  );
};

export default Home;
