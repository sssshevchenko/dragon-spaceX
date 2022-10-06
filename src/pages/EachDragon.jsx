import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import MainPage from '../components/MainPage/MainPage';
import Navbar from '../components/Navbar/Navbar';
import MyError from '../components/UI/error/MyError';
import MyLoader from '../components/UI/loader/MyLoader';
import { useInfoAll } from '../hooks/use-info-all';
import { RouteNames } from '../router';
import { fetchEachDragon } from '../store/reducers/fetch/fetchAllSlice';


const EachDragon = () => {  
    const {id} = useParams()
    const dispatch = useDispatch()
    const {infoEach, status, error} = useInfoAll()

    useEffect(() => {
        dispatch(fetchEachDragon(id))
    }, [id, dispatch])
    return (
        <div>
            <Navbar 
                firstTitle='Back' 
                secondTitle='Favorites' 
                firstRoute={RouteNames.ALLDRAGONS} 
                secondRoute={RouteNames.FAVORITES}
            />
            {status === 'loading' && <MyLoader />}
            {error && <MyError error={error} />}
            {infoEach.map((post, index) => 
                <MainPage post={post} key={index} data-testid='each'/>
            )}
        </div>
    );
};

export default EachDragon;