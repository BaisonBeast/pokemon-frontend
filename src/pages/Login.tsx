// src/components/AuthForm.tsx
import React, { useState } from 'react';
import { rootRoute } from "../router/router";
import { createRoute, useNavigate } from '@tanstack/react-router';
import { loginUser, signupUser } from '../api/authApi';
import useUserStore from '../store/store';
import { homeRoute } from '../pages/Home';
import { leaderboardRoute } from '../pages/Leaderboard';


export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login
})

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [userName, updateUserName] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('trainer');
  const {setUsername, setRole, setUserId} = useUserStore();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = async() => {
    let data;
    if(isSignup) {
      data =  signupUser({username: userName, password, role: selectedRole});
    } else {
      data = await loginUser({username: userName, password});
    }
    setUsername(data.username);
    setRole(data.role);
    setUserId(data.userId);
    updateUserName('');
    setPassword('');
    localStorage.setItem('userRole', data.role);
    localStorage.setItem('userName', data.username);
    localStorage.setItem('userId', data.userId);
    
    if(data.role === 'trainer') navigate(homeRoute);
    else navigate(leaderboardRoute)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-between mb-4">
            <button
            className={`text-white ${!isSignup && 'underline'}`}
            onClick={handleSwitch}
            >
            Login
            </button>
            <button
            className={`text-white ${isSignup && 'underline'}`}
            onClick={handleSwitch}
            >
            SignUp
            </button>
        </div>
        <input
            type="text"
            placeholder="username"
            className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
            value={userName}
            onChange={e => updateUserName(e.target.value)}
        />
        <input
            type="password"
            placeholder="password"
            className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        {isSignup && (
            <select className="w-full p-2 mb-4 bg-gray-700 text-white rounded" onChange={e => setSelectedRole(e.target.value)}>
            <option value="trainer">Trainer</option>
            <option value="judge">Judge</option>
            </select>
        )}
        <button className="w-full p-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  );
}

export default Login;
