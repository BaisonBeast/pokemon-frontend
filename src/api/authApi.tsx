import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (credentials: { username: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, credentials);
    return response.data.userData;
  } catch (err) {
    console.error('Error in loging:', err); 
    throw new Error('Failed to login.');
  }
  
};

export const signupUser = async (userDetails: { username: string; password: string; role: string }) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/signup`, userDetails);
    return response.data.userData;
  } catch (err) {
    console.error('Error in signing up:', err); 
    throw new Error('Failed to signup.');
  }
  
};  