import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export interface TrainerLike {
    trainerId: string;
    judgeId: string;
    role: string
}

export const fetchTrainers = async () => {
    const response = await axios.get(`${API_URL}/api/users/leaderboard`);
    return response.data;
};

export const likeTrainer = async (TrainerData: TrainerLike) => {
    const response = await axios.post(`${API_URL}/api/users/like`, TrainerData);
    return response.data;
}