import React from 'react';
import { Link } from '@tanstack/react-router';
import useUserStore from '../store/store';

type SetRoleFunction = (role: string | null) => void;

interface SidebarProps {
    highlight: string;
}

const handleLogout = (setRole: SetRoleFunction): void => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    setRole(null);
};

const Sidebar: React.FC<SidebarProps> = ({ highlight }) => {
    const { role, setRole } = useUserStore();

    return (
        <div className="min-w-64 bg-gray-800 min-h-screen text-lg flex flex-col justify-between p-4 border-r border-gray-500">
            <div className="mt-20 flex flex-col items-center">
                {role === 'trainer' && (
                    <Link
                        to="/"
                        className={`text-white block py-6 ${highlight === 'home' ? 'underline' : ''}`}
                    >
                        My Pokemons
                    </Link>
                )}
                <Link
                    to="/leaderboard"
                    className={`text-white block py-6 ${highlight === 'leader' ? 'underline' : ''}`}
                >
                    Leaderboard
                </Link>
                <Link
                    to="/about"
                    className={`text-white block py-6 ${highlight === 'about' ? 'underline' : ''}`}
                >
                    About
                </Link>
            </div>
            <button
                className="text-white block py-2"
                onClick={() => handleLogout(setRole)}
            >
                Logout
            </button>
        </div>
    );
};

export default Sidebar;