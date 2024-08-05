import React from 'react';
import Sidebar from '../components/Sidebar';
import Leaderboard from '../components/Leaderboard';


function Home() {
  return (
    <div className="flex">
        <Sidebar highlight='leader'/>
        <Leaderboard />
    </div>
  )
}

export default Home