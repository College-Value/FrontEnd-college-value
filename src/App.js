import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from './components/Home'
import SignUp from './components/SignUp'
import collegePage from './components/collegePage'
import PrivateRoute from './components/PrivateRoute'
import About from './components/About'
import Profile from './components/Profile/Profile'
import editProfile from './components/Profile/editProfile'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/editProfile" component={editProfile} />
       

        <PrivateRoute path='/collegePage' component={collegePage} />

      </div>
    </Router>
  );
}

export default App;
