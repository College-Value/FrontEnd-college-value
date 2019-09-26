import React, {useEffect, useState} from 'react'
import Navigation from "../Navigation";
import axios from 'axios'
import { getSnapshotData } from 'jest-snapshot/build/utils';
import ProfileList from './ProfileList'
import axiosWithAuth from '../../helpers/axiosWithAuth'


const Profile = () => {
    const [profileList, setProfileList] = useState([])

    useEffect(() => {
        axiosWithAuth()
          .get(" https://gcj2-college-value.herokuapp.com/users/getusername ")
    
          .then(res => {
            console.log('res', res);
            setProfileList(res.data);
          })
          .catch(err => console.log(err.response));
      }, []);

      return (
        <div>
            <Navigation />
          {profileList.map(profile => {
            return (
              <div key={profile.id}>
                {" "}
                Username: {profile.username} Password: {profile.password} 
              </div>
            );
          })}
    
          
        </div>
      );
    };

export default Profile