// src/components/Profiles.js
import React, { useEffect, useState } from 'react';
import { getComments } from '../services/apiService';

const Profiles = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then(response => {
      setComments(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profiles;