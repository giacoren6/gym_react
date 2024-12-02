// src/components/Comments.js
import React, { useEffect, useState } from 'react';
import { getComments } from '../services/apiService';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getComments().then(response => {
      console.log('Fetched comments:', response.data);
      if (response.data && Array.isArray(response.data.results)) {
        setComments(response.data.results);
      } else {
        console.error('API response is not an array:', response.data);
        setError('API response is not an array');
        setComments([]); // Ensure comments is an array
      }
    }).catch(error => {
      console.error('Error fetching comments:', error);
      setError('Error fetching comments');
      setComments([]); // Ensure comments is an array
    });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {Array.isArray(comments) && comments.map(comment => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;