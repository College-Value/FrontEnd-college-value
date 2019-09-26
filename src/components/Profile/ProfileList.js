import React, {useState} from 'react'
import axios from 'axios'

const initialProfile = {
    username: '', 
    password: ''
}

const ProfileList = ({ props, updateProfiles, profiles}) => {
    const [editing, setEditing] = useState(false)
    const [profileToEdit, setProfileToEdit] = useState(initialProfile)

    const editProfile = profile => {
        setEditing(true)
        setProfileToEdit(profile)
    }

    const saveEdit = e => {
        e.preventDefault();
        axios
          .put(`https://gcj2-college-value.herokuapp.com/users/user/${profileToEdit.id}`, profileToEdit)
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
        axios
          .delete(`https://gcj2-college-value.herokuapp.com/searches/${profileToEdit.id}`)
          .then(res => {
            updateProfiles(profiles.filter(profile => profile.id !== res.data));
          })
          .catch(err => console.log(err.response));
        
      };
    
      return (
        <div className="colors-wrap">
          <p>profiles</p>
          {/* <ul>
            {profiles.map(profile => (
              <li key={profile.profile} onClick={() => editProfile(profile)}>
                <span>
                  <button className="delete" onClick={() => deleteProfile(profile)}>
                    delete
                  </button>
                  {profile.profile}
                </span>
                
              </li>
            ))}
          </ul> */}
          {editing && (
            <form onSubmit={saveEdit}>
              <legend>edit profile</legend>
              <label>
                 username:
                <input
                  onChange={e =>
                    setProfileToEdit({ ...profileToEdit, profile: e.target.value })
                  }
                  value={profileToEdit.profile}
                />
              </label>
              <label>
                password:
                <input
                  onChange={e =>
                    setProfileToEdit({
                      ...profileToEdit,
                      
                    })
                  }
                  value={profileToEdit.profile}
                />
              </label>
              <div className="button-row">
                <button type="submit" onClick={event => saveEdit(event, profiles)}>
                  save
                </button>
                <button onClick={() => setEditing(false)}>cancel</button>
              </div>
            </form>
          )}
          
          
        </div>
      );
    };

export default ProfileList