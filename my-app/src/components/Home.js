import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeImage from "../imgs/main-image.jpg";
import Navigation from "./Navigation";
import Axios from 'axios';
import PhotoCard from "./PhotoCard"

const Home = () => {

  const [homeImg, sethomeImg] = useState([])

  useEffect(() => {
    Axios.get("https://api.unsplash.com/collections/4755774/photos?client_id=0a92c5c475ba50f63f6f97cae6fbf57d3b9e16db8bdcfba5b0a93b8b7bc8aeb1&query=college&w=200px&h=200px").then(response => {

      const homeImg = response.data

      sethomeImg(homeImg);
    })
  }, [])

  return (
    <div>


      <div className="container">
        <Navigation />
        <header>
          <h1>College Value/Earnings Predictor</h1>
          </header>
          <div className="img-styles">
            {homeImg.map(item => {
              return (
                <PhotoCard
                  key={item.id}
                  image={item.urls.regular}
                />
              )}
            )}
          </div>
          {/* <img
            src={HomeImage} width="300" alt="college graduates throwing caps in the air"></img> */}
       
        <p>Time to make one of the biggest descisions of your lives. Use the power of data science to predict which college is best for you. </p>
        <Link to="/signup"><button className="sign-up-btn">SIGN UP</button></Link>
        <Link to="/login" />

        <div className="features" />
        <i className="fas fa-balance-scale-left"></i>
        <p>Data-based decisions</p>
        <p>Choosing a college is an emotional decision, the College/Savings Predictor helps you focus on facts.</p>


        <div className="features" />
        <i className="fas fa-piggy-bank"></i>
        <p>A lifetime of savings</p>
        <p>Save money and time by making sure the cost of your college education aligns with your life plans.</p>



        <div className="features" />
        <i className="fas fa-graduation-cap"></i>
        <p>Graduate with less debt</p>
        <p>Find out which college will help you achieve your goals with the least amount of debt possible</p>

      </div>
    </div>
  );
};

export default Home;
