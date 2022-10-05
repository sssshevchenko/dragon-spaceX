import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../../store/reducers/auth/authSlice';
import MyButton from '../UI/button/MyButton';

const Navbar = ({firstTitle, secondTitle, firstRoute, secondRoute}) => {
    const dispatch = useDispatch()
    return (
        <div className='navbar'>
            <div className="navbar__item">
                <Link to={firstRoute} className='navbar__link'>{firstTitle}</Link>
                <Link to={secondRoute} className='navbar__link'>{secondTitle}</Link>
                <MyButton onClick={() => dispatch(removeUser())}>Log out</MyButton>
            </div>
        </div>
    );
};

export default Navbar;