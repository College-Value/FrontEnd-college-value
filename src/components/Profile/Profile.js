import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";
import axios from "axios";
import { getSnapshotData } from "jest-snapshot/build/utils";
import axiosWithAuth from "../../helpers/axiosWithAuth";
import { ErrorMessage } from "formik";
import { Link } from "react-router-dom";


const Profile = ({ profiles, updateProfiles, props }) => {
  const [profileList, setProfileList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [profileToEdit, setProfileToEdit] = useState({username: ''});

  useEffect(() => {
    axios
      .get("https://gcj2-college-value.herokuapp.com/users/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })

      .then(res => {
        console.log("response: ", res.data);
        setProfileList(res.data);
      })
      .catch(err => console.log(err.response));
  }, []);

 



  const deleteProfile = profile => {
    axiosWithAuth()
      .delete(
        `https://gcj2-college-value.herokuapp.com/searches/${profileToEdit.id}`
      )
      .then(res => {
        updateProfiles(profiles.filter(profile => profile.id !== res.data)) 
        

        
      })
      .catch(err => console.log(err.response)) 
     


   
  };


  return (
    <div>
      <Navigation />

      <div className="profilePage">
        {profileList.map(profile => {
          return (
            <div
              className="profileContent"
              key={profile.username}
            >
              <span>
                <button
                  className="delete"
                  onClick={() => deleteProfile(profile)}
                >
                  delete
                </button>
                <p className="usernameText">Username: {profile.username}</p>
                <Link className='edit' to='/editProfile'>
                  edit
                </Link>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
