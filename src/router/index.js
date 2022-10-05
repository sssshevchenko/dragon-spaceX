import Login from '../pages/LoginPage';
import MainDragon from "../pages/MainDragon";
import Favorites from '../pages/Favorites';
import AllDragons from '../pages/AllDragons';
import Register from '../pages/RegisterPage';
import EachDragon from '../pages/EachDragon';

export const RouteNames = {
    LOGIN: '/login',
    REGISTER: '/register',
    MAINDRAGON: '/',
    FAVORITES: '/favorites',
    ALLDRAGONS: '/alldragons'  
}

export const publicRoutes = [
    {path: RouteNames.LOGIN, exact: true, element: <Login />},
    {path: RouteNames.REGISTER, exact: true, element: <Register />}
]

export const privateRoutes = [
    {path: RouteNames.MAINDRAGON, exact: true, element: <MainDragon />},
    {path: RouteNames.FAVORITES, exact: true, element: <Favorites />},
    {path: RouteNames.ALLDRAGONS, exact: true, element: <AllDragons />},
    {path: `${RouteNames.ALLDRAGONS}/:id`, exact: true, element: <EachDragon />}
]