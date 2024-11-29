// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://gym-share-9a40a7748e0a.herokuapp.com';

export const getComments = () => axios.get(`${API_BASE_URL}/comments`);
export const getFollowers = () => axios.get(`${API_BASE_URL}/followers`);
export const getLikes = () => axios.get(`${API_BASE_URL}/likes`);
export const getPosts = () => axios.get(`${API_BASE_URL}/posts`);
export const getProfiles = () => axios.get(`${API_BASE_URL}/profiles`);