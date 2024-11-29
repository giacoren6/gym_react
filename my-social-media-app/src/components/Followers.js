// src/components/Followers.js
import React, { useEffect, useState } from 'react';
import { getFollowers } from '../services/apiService';

const Followers = () => {
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        getFollowers().then(response => {
            setFollowers(response.data);
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