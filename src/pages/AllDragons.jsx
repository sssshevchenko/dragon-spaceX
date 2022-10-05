import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../components/Navbar/Navbar';
import { RouteNames } from '../router';
import { fetchAllDragons } from '../store/reducers/fetch/fetchAllSlice';
import MyLoader from '../components/UI/loader/MyLoader';
import MyError from '../components/UI/error/MyError';
import { useInfoAll } from '../hooks/use-info-all';
import MyPagination from '../components/UI/pagination/MyPagination';

const AllDragons = () => {  
    const {infoAll, status, error} = useInfoAll()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllDragons())
    }, [dispatch])

    return (
        <div>
            <Navbar 
                firstTitle='Main page' 
                secondTitle='Favorites' 
                firstRoute={RouteNames.MAINDRAGON} 
                secondRoute={RouteNames.FAVORITES} 
            />
            {status === 'loading' && <MyLoader />}
            {error && <MyError error={error} />}
            <MyPagination infoAll={infoAll} />
        </div>
    );
};

export default AllDragons;