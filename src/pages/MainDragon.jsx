import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import MainPage from '../components/MainPage/MainPage';
import Navbar from '../components/Navbar/Navbar';
import MyError from '../components/UI/error/MyError';
import MyLoader from '../components/UI/loader/MyLoader';
import { useFirstInfo } from '../hooks/use-first-info';
import { RouteNames } from '../router';
import { fetchFirstDragon } from '../store/reducers/fetch/fetchFirstDragonSlice';


const MainDragon = () => {
    
    const dispatch = useDispatch()
    const {infoFirst, status, error} = useFirstInfo()    
    useEffect(() => {
        dispatch(fetchFirstDragon())
    }, [dispatch])     
    
    return (
        <div data-testid='main'>
            <Navbar 
                firstTitle='All dragons' 
                secondTitle='Favorites' 
                firstRoute={RouteNames.ALLDRAGONS} 
                secondRoute={RouteNames.FAVORITES}
            />
            {status === 'loading' && <MyLoader />}
            {error && <MyError error={error} />}
            {infoFirst.map((post, index) => 
                <MainPage post={post} key={index}/>    
            )}
        </div>
    );
};

export default MainDragon;