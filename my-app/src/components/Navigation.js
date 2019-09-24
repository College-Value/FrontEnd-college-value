  
import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="nav">
     
     
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="">Predictions</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;