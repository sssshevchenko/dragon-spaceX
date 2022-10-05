import React from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../router';
import DragonsLocalStorage from '../DragonsLocalStorage/DragonsLocalStorage';

const AllDragonsPage = ({post}) => {

    return (
        <div className='main'>
            <div className="main__img">
                <img src={post.flickr_images[0]} alt="Dragon" />
            </div>
            <div className="main__info">
                <h1>{post.name}</h1>
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', marginBottom: '10px'}}>
                    <Link to={`${RouteNames.ALLDRAGONS}/${post.id}`} style={{textDecoration: 'none', color: 'blue'}}>GET INFO</Link>
                    <DragonsLocalStorage post={post} />
                </div>         
            </div>

        </div>
    );
};

export {AllDragonsPage};