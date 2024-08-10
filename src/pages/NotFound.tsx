import { createRoute, Link } from '@tanstack/react-router';
import useUserStore from '../store/store';
import { rootRoute } from '../router/router';

export const notFoundRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '*',
    component: NotFound
});

function NotFound() {
    const {role} = useUserStore();
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl mb-8">Page Not Found</p>
                <Link to={`${role == 'trainer'? '/': '/leaderboard'}`} className="text-blue-500 hover:underline">
                    Go back to Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;