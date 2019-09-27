import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";
import axios from "axios";
import { getSnapshotData } from "jest-snapshot/build/utils";
import axiosWithAuth from "../../helpers/axiosWithAuth";

const initialProfile = {
  profile: ""
};

const Profile = ({ profiles, updateProfiles, props }) => {
  const [profileList, setProfileList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [profileToEdit, setProfileToEdit] = useState(initialProfile);

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

  const editProfile = profile => {
    setEditing(true);
    setProfileToEdit(profile);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(
        `https://gcj2-college-value.herokuapp.com/users/user/${profileToEdit.id}`,
        profileToEdit
      )
      .then(res => {
        updateProfiles([
          ...profiles.filter(profile => profile.id !== profileToEdit.id),
          res.data
        ]);
        setEditing(false);
      })
      .catch(err => console.log(err.response));
  };

  const deleteProfile = profile => {
    axiosWithAuth()
      .delete(
        `https://gcj2-college-value.herokuapp.com/searches/${profileToEdit.id}`
      )
      .then(res => {
        updateProfiles(profiles.filter(profile => profile.id !== res.data));
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div>
      <Navigation />

<div className='profilePage'>
      {profileList.map(profile => {
        return (
          
          <div className='profileContent' key={profile.username} onClick={() => editProfile(profile)}>
            <span>
              <button className="delete" onClick={() => deleteProfile(profile)}>
                delete
              </button>
              <p className='usernameText'>
              Username:  {profile.username}
              </p>
              <button className="edit" onClick={() => editProfile(profile)}>
                edit
              </button>
            </span>
            </div>
          
         
        );
      })}
      </div>
    </div>
  );
};

export default Profile;