// src/components/Followers.js
import React, { useEffect, useState } from 'react';
import { getFollowers } from '../services/apiService';

const Followers = () => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    getFollowers().then(response => {
      if (Array.isArray(response.data)) {
        setFollowers(response.data);
      } else {
        console.error('API response is not an array:', response.data);
      }
    }).catch(error => {
      console.error('Error fetching followers:', error);
    });
  }, []);

  return (
    <div>
      <h2>Followers</h2>
      <ul>
        {followers.map(follower => (
          <li key={follower.id}>{follower.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Followers;