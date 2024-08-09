import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (credentials: { username: string; password: string }) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, credentials);
  return response.data.userData;
};

export const signupUser = async (userDetails: { username: string; password: string; role: string }) => {
  const response = await axios.post(`${API_URL}/api/auth/signup`, userDetails);
  return response.data.userData;
};  