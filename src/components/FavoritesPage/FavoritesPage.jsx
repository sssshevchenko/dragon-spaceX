import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllDragons } from '../../store/reducers/fetch/fetchAllSlice';

const FavoritesPage = ({post}) => {
    const getDragons = () => {
        const dragonsLocalStorage = localStorage.getItem('dragons')
        if(dragonsLocalStorage !== null) {
            return JSON.parse(dragonsLocalStorage)
        }
        return []
    }
    const getDragonsId = getDragons()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllDragons())
    }, [dispatch])

    return (
        getDragonsId.indexOf(post.id) !== -1
            ? <div className='main'>
                <div className="main__img">
                    <img src={post.flickr_images[1]} alt="Dragon" />
                </div>
                <div className="main__info">
                    <h1>{post.name}</h1>
                    <span>{post.description}</span>
                    <h3>Get more information on <a href={post.wikipedia} style={{textDecoration: 'none', color: 'blue'}}>Wikipedia</a></h3>
                </div>
            </div>
            : <></>      
    );
};

export default FavoritesPage;