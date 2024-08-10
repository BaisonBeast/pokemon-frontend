import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export interface TrainerLike {
    trainerId: string;
    judgeId: string;
    role: string
}

export const fetchTrainers = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/users/leaderboard`);
        return response.data; 
    } catch (error) {
        console.error('Error fetching trainers:', error); 
        throw new Error('Failed to fetch trainers.');
    }
};

export const likeTrainer = async (TrainerData: TrainerLike) => {
    try {
        const response = await axios.post(`${API_URL}/api/users/like`, TrainerData);
        return response.data;
    } catch (error) {
        console.error('Error in liking:', error); 
        throw new Error('Failed to like trainer.');
    }
}