// src/App.js
import React from 'react';
import Comments from './components/Comments';
import Followers from './components/Followers';
import Likes from './components/Likes';
import Posts from './components/Posts';
import Profiles from './components/Profiles';

function App() {
  return (
    <div className="App">
      <h1>My Social Media App</h1>
      <Comments />
      <Followers />
      <Likes />
      <Posts />
      <Profiles />
    </div>
  );
}

export default App;