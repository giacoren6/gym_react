// src/components/Likes.js
import React, { useEffect, useState } from 'react';
import { getLikes } from '../services/apiService';

const Likes = () => {
  const [likes, setLikes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLikes().then(response => {
      console.log('Fetched likes:', response.data);
      if (response.data && Array.isArray(response.data)) {
        setLikes(response.data);
      } else {
        console.error('API response is not an array:', response.data);
        setError('API response is not an array');
        setLikes([]); // Ensure likes is an array
      }
    }).catch(error => {
      console.error('Error fetching likes:', error);
      setError('Error fetching likes');
      setLikes([]); // Ensure likes is an array
    });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Likes</h2>
      <ul>
        {Array.isArray(likes) && likes.map(like => (
          <li key={like.id}>{like.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Likes;