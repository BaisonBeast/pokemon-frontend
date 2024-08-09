import React from 'react';
import {fetchTrainers, likeTrainer, TrainerLike} from '../api/leaderboardApi';
import { useQuery } from '@tanstack/react-query';
import useUserStore from '../store/store';
import { toast } from 'react-toastify';

interface Leaderboard {
  likes: number;
  userId: string;
  username: string;
  pokemon: string;
}

const LeaderboardComp: React.FC = () => {
  const {role, userId} = useUserStore();
  const { data: leaderboardData, isLoading, error } = useQuery<Leaderboard[]>({
    queryKey: ['leaderboard'],
    queryFn: fetchTrainers,
});

const handleLike = async(TrainerData: TrainerLike) => {
  const response = await likeTrainer(TrainerData);
  toast.success(response)
}

  if (isLoading) {
      return <div className='p-10'>Loading...</div>;
  }

  if (error) {
      return <div className='p-10'>Error loading data</div>;
  }
  return (
      <div className="flex-1 flex flex-col items-center p-8 bg-gray-800 text-white">
        <h2 className="text-2xl font-bold mb-4 self-start ml-11 mb-14">Leaderboard</h2>
        <div className="w-11/12 h-4/5 border border-gray-500 rounded-lg pt-5 overflow-y-auto">
          <table className="w-full text-center">
            <thead>
              <tr>
                <th className="pb-2">Sr. No.</th>
                <th className="pb-2">Pokemon</th>
                <th className="pb-2">Trainer</th>
                <th className="pb-2">Likes</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData?.map((entry: Leaderboard, id: number) => (
                <tr key={entry.userId}>
                  <td className="py-2">{id+1}</td>
                  <td className="py-2">{entry.pokemon}</td>
                  <td className="py-2">{entry.username}</td>
                  <td className="py-2">{entry.likes}</td>
                  {role && role == 'judge' && <td className='cursor-pointer' onClick={() => handleLike({trainerId: entry.userId, judgeId: userId, role})}>❤️</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default LeaderboardComp;