import Sidebar from '../components/Sidebar';
import MyPokemons from '../components/MyPokemons';
import { rootRoute } from "../router/router";
import { createRoute, useNavigate } from '@tanstack/react-router';
import useUserStore from '../store/store';
import { leaderboardRoute } from '../pages/Leaderboard';


export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home
})


function Home() {
  const navigate = useNavigate();
  const {role} = useUserStore();
  if(role === 'judge') navigate(leaderboardRoute);
  
  return (
    <div className="flex">
        <Sidebar highlight='home' />
        <MyPokemons />
    </div>
  )
}

export default Home