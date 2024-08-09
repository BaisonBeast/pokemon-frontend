import Sidebar from '../components/Sidebar';
import LeaderboardComp from '../components/LeaderboardComp';
import { rootRoute } from "../router/router";
import { createRoute } from '@tanstack/react-router';

export const leaderboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/leaderboard',
  component: Leaderboard
})

function Leaderboard() {
  return (
    <div className="flex">
        <Sidebar highlight='leader'/>
        <LeaderboardComp />
    </div>
  )
}

export default Leaderboard;