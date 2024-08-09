import {create} from 'zustand';

interface UserState {
    username: string;
    userId: string;
    role: string | null;
    setUsername: (username: string) => void;
    setRole: (role: string | null) => void;
    setUserId: (userId: string) => void;
}


export const useUserStore = create<UserState>((set) => ({
    username: localStorage.getItem('userName') || '',
    role: localStorage.getItem('userRole') || null,
    userId: localStorage.getItem('userId') || '',
    setUsername: (username) => set({ username }),
    setRole: (role) => {
        localStorage.setItem('userRole', role || '');
        set({ role });
    },
    setUserId: (userId) => set({userId})
}));

export default useUserStore;
