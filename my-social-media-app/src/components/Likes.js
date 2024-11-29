// src/components/Comments.js
import React, { useEffect, useState } from 'react';
import { getLikes } from '../services/apiService';

const Likes = () => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    getLikes().then(response => {
      setLikes(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Likes</h2>
      <ul>
        {likes.map(like => (
          <li key={like.id}>{like.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Likes;