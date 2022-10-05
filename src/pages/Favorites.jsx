import React from 'react';
import FavoritesPage from '../components/FavoritesPage/FavoritesPage';
import Navbar from '../components/Navbar/Navbar';
import MyError from '../components/UI/error/MyError';
import MyLoader from '../components/UI/loader/MyLoader';
import { useInfoAll } from '../hooks/use-info-all';
import { RouteNames } from '../router';

const Favorites = () => {

    const {infoAll, status, error} = useInfoAll()

    return (
            <div>
                <Navbar 
                    firstTitle='All dragons' 
                    secondTitle='Main page' 
                    firstRoute={RouteNames.ALLDRAGONS} 
                    secondRoute={RouteNames.MAINDRAGON} 
                />
                {status === 'loading' && <MyLoader />}
                {error && <MyError error={error} />}
                {infoAll.map((post, index) =>
                    <FavoritesPage post={post} key={index} />
                )}
            </div>
    );
};

export default Favorites;