import React from 'react';
// import { Link } from '@tanstack/react-router';

interface MyComponentProps {
    highlight: string;
}

const Sidebar: React.FC<MyComponentProps> = ({ highlight }) => {
  return (
    <div className="min-w-64 bg-gray-800 min-h-screen text-lg flex flex-col justify-between p-4 border-r border-gray-500">
        <div className='mt-20 flex flex-col items-center'>
            <div className={`text-white block py-6 ${highlight == 'home'? 'underline': ''}`}>
                My Pokemons
            </div>
            <div className={`text-white block py-6 ${highlight == 'leader'? 'underline': ''}`}>
                Leaderboard
            </div>
            <div className={`text-white block py-6 ${highlight == 'about'? 'underline': ''}`}>
                About
            </div>
        </div>
        <button className="text-white block py-2">Logout</button>
    </div>
  );
};

export default Sidebar;
