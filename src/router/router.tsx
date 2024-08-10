import {
    createRouter,
    createRootRoute,
    Outlet
} from '@tanstack/react-router';
import { homeRoute } from '../pages/Home';
import { aboutRoute } from '../pages/About';
import { leaderboardRoute } from '../pages/Leaderboard';
import { loginRoute } from '../pages/Login';
import { notFoundRoute } from '../pages/NotFound';
import Login from '../pages/Login';
import useUserStore from '../store/store';

const RootComponent = () => {
    const role = useUserStore((state) => state.role);

    if (role === null) {
        return <Login />;
    } 
    return <Outlet />;
};

export const rootRoute = createRootRoute({
    component: RootComponent,
});

const routeTree = rootRoute.addChildren([leaderboardRoute, homeRoute, aboutRoute , loginRoute, notFoundRoute]);

export const router = createRouter({ routeTree });