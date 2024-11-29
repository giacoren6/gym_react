// src/components/Posts.js
import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/apiService';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(response => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;