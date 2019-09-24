import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../imgs/main-image.jpg"
import Navigation from "./Navigation"



const Home = () => {
  return (
 
    <div>
         <Navigation />
      <header>
        <h1>College Value/Earnings Predictor</h1>
        <img
          src={HomeImage} width="300" alt="college graduates throwing caps in the air"></img>
      </header>
      <p>Time to make one of the biggest descisions of your lives. Use the power of data science to predict which college is best for you. </p>
      <Link to="/signup"><button class="sign-up-btn">SIGN UP!</button></Link>
      <Link to="/login" />

      <div class="features" />
      <i class="fas fa-balance-scale-left"></i>
      <p>Data-based decisions</p>
      <p>Choosing a college is an emotional decision, use the predictor to focus on facts</p>


      <div class="features" />
      <i class="fas fa-piggy-bank"></i>
      <p>A lifetime of savings</p>
      <p>Save money and time by making sure the cost of your college education aligns with your life plans</p>



      <div class="features" />
      <i class="fas fa-graduation-cap"></i>
      <p>Graduate with less debt</p>
      <p>Find out which college will help you achieve your goals with the least amount of debt possible</p>

    </div>

  );
};

export default Home;
