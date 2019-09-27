import React, { useState, useEffect } from "react";
import Navigation from "../Navigation";
import axiosWithAuth from "../../helpers/axiosWithAuth";
import axios from 'axios'

const EditProfile = props => {
const [profile, setProfile] = useState()

const handleChange = e => 
setProfile({...profile, [e.target.name]: e.target.value})

const fetchProfile = id => {
    axios
      .get("https://gcj2-college-value.herokuapp.com/users/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })

      .then(res => {
        console.log("response: ", res.data);
        setProfile(res.data);
      })
      .catch(err => console.log(err.response));
  }

  const handleProfile = index => e => {
      setProfile({
          ...profile,
          profiles: profile.profiles.map((profile, profileIndex) => {
            if (profileIndex === index) {
              return e.target.value;
            } else {
              return profile;
            }
          })
        });
      };

const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/movies/${profile.id}`, profile)
      .then(res => {
        props.history.push("/profile");
        console.log(res)
      })
      .catch(err => console.log(err.response));
  };



  return (
    <div>
      <Navigation />
      <form>
          Username: 
          {/* <input 
          type='text'
          name='username'
          placeholder='username'
          value={profile.username}
          onChange={handleChange}
          /> */}

          {/* {profile.profiles.map((profileName, index) => {
              return (
                  <input 
                  type='text'
                  placeholder='username'
                  value={profileName}
                  key={index}
                  onChange={handleProfile(index)}
                  />
              )
          })} */}
          
          <button type='submit' >Update Profile</button>
          
      </form>
    </div>
  );
};

export default EditProfile;
