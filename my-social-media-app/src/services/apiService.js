// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://gym-share-9a40a7748e0a.herokuapp.com';

export const getComments = () => {
  return axios.get(`${API_BASE_URL}/comments`)
    .then(response => {
      console.log('API response for comments:', response.data);
      return response;
    })
    .catch(error => {
      console.error('Error fetching comments:', error);
      throw error;
    });
};

export const getFollowers = () => axios.get(`${API_BASE_URL}/followers`);
export const getLikes = () => axios.get(`${API_BASE_URL}/likes`)
  .then(response => {
    console.log('API response for likes:', response.data);
    return response;
  })
  .catch(error => {
    console.error('Error fetching likes:', error);
    throw error;
  });
export const getPosts = () => axios.get(`${API_BASE_URL}/posts`);
export const getProfiles = () => axios.get(`${API_BASE_URL}/profiles`);

export const createProfile = (profile) => {
  return axios.post(`${API_BASE_URL}/profiles`, profile)
    .then(response => {
      console.log('Profile created:', response.data);
      return response;
    })
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error creating profile:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error creating profile: No response received', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error creating profile:', error.message);
      }
      throw error;
    });
};