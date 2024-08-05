// src/components/AuthForm.tsx
import React, { useState } from 'react';

const AuthForm: React.FC = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

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
        />
        <input
            type="password"
            placeholder="password"
            className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
        />
        {isSignup && (
            <select className="w-full p-2 mb-4 bg-gray-700 text-white rounded">
            <option value="trainer">Trainer</option>
            <option value="judge">Judge</option>
            </select>
        )}
        <button className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
        </div>
    </div>
  );
};

export default AuthForm;
