import React from 'react';
import cl from '../loader/MyLoader.module.css';

const MyLoader = () => {
    return (
        <div className={cl.loader__item}>
            <div className={cl.loader}></div>          
        </div>
    );
};

export default MyLoader;