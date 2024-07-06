import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import Layout from '../pages/Layout';
import ProtectedRouteLayout from '../pages/ProtectedRouteLayout';
import ErrorPage from "../pages/ErrorPage";
import Home from "../routes/Home";
import AddUser, {action as addUserAction } from "../routes/AddUser";
import LogIn, {action as addLogInAction} from "../routes/LogIn";
import Urls, {loader as urlLoader} from "../routes/Urls";
import AddUrl, {action as addUrlAction, loader as addUrlLoader} from "../routes/AddUrl";
import LogOut, { loader as addLogOutLoader } from '../routes/LogOut';

const Routes = () => {
    const { isAuth } = useAuth();

    const publicRoutes = [
        {
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/users/add',
                    element: <AddUser />,
                    action: addUserAction,
                },
                {
                    path: '/login',
                    element: <LogIn />,
                    action: addLogInAction,
                },
                {
                    path: '/logout',
                    element: <LogOut />,
                    loader: addLogOutLoader,
                },
            ],
        },
    ];

    const protectedRoutes = [
        {
            element: <ProtectedRouteLayout />,
            children: [
                {
                  path: '/urls',
                  element: <Urls />,
                  loader: urlLoader,
                },
                {
                  path: '/urls/add',
                  element: <AddUrl />,
                  action: addUrlAction,
                  loader: addUrlLoader,
                }
              ], 
        },
    ];

    const router = createBrowserRouter([
        ...publicRoutes,
        ...(!isAuth ? protectedRoutes : []),
        ...protectedRoutes,
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;