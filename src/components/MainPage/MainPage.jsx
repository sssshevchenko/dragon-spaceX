import React from 'react';
import MySlider from '../UI/slider/MySlider';

const MainPage = ({post}) => {
    const slides = [
        {url: `${post.flickr_images[1]}`, title: 'Dragon1'},
        {url: `${post.flickr_images[2]}`, title: 'Dragon1'},
    ]

    return (
        <div data-testid='main' className='main'>
            <div className="main__img">
                <img src={post.flickr_images[0]} alt="Dragon" />
            </div>
            <div className="main__info">
                <h1>{post.name}</h1>
                <span>{post.description}</span>
                <h2>Technical characteristics</h2>
                <div className="main__charact">
                    <ul className='main__ul'>
                        <li>First flight - {post.first_flight}</li>
                        <li>Height with trunk - {post.height_w_trunk.meters} metres / {post.height_w_trunk.feet} feet</li>
                        <li>Dry mass - {post.dry_mass_kg} kg / {post.dry_mass_lb} lb</li>
                    </ul>    
                    <ul className='main__ul'>
                        <li>Temperature - {post.heat_shield.temp_degrees} degrees</li>
                        <li>Material - {post.heat_shield.material}</li>
                        <li>Diameter - {post.diameter.meters} meters / {post.diameter.feet} feet</li>
                    </ul> 
                </div>  
                <MySlider slides={slides} />
                <h3>Get more information on <a href={post.wikipedia} style={{textDecoration: 'none', color: 'blue'}}>Wikipedia</a></h3>
            </div>
        </div>
    );
};

export default MainPage;