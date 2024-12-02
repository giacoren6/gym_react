// src/components/Profiles.js
import React, { useEffect, useState } from 'react';
import { getProfiles, createProfile } from '../services/apiService';

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);
  const [newProfile, setNewProfile] = useState({ name: '', bio: '' });

  useEffect(() => {
    getProfiles().then(response => {
      if (response.data && Array.isArray(response.data.results)) {
        setProfiles(response.data.results);
      } else {
        console.error('API response is not an array:', response.data);
        setProfiles([]); // Ensure profiles is an array
      }
    }).catch(error => {
      console.error('Error fetching profiles:', error);
      setProfiles([]); // Ensure profiles is an array
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting new profile:', newProfile);
    createProfile(newProfile).then(response => {
      setProfiles([...profiles, response.data]);
      setNewProfile({ name: '', bio: '' });
    }).catch(error => {
      console.error('Error creating profile:', error);
      setError('Error creating profile');
    });
  };

  return (
    <div>
      <h2>Profiles</h2>
      {error && <div>Error: {error}</div>}
      <ul>
        {Array.isArray(profiles) && profiles.map(profile => (
          <li key={profile.id}>{profile.name}: {profile.bio}</li>
        ))}
      </ul>
      <h2>Create Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newProfile.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Bio:</label>
          <input
            type="text"
            name="bio"
            value={newProfile.bio}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default Profiles;