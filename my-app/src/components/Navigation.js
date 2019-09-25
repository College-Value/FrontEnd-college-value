import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="nav">
        <div className='navLink'>
          <Link to="/">Home</Link>
        </div>
        <div className='navLink'>
          <Link to="/about">About</Link>
        </div>
        <div className='navLink'>
          <Link to="">Predictionssss</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
