import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import { RouteNames } from '../../router';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { setUser } from '../../store/reducers/auth/authSlice';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate(RouteNames.MAINDRAGON)
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <div className='login'>
            <h1>Log in</h1>
            <LoginForm title='sign in' handleClick={handleLogin}/>
            <p style={{marginTop: '10px', fontSize:'13px'}}>
                Or <Link to={RouteNames.REGISTER} style={{textDecoration: 'none', color: 'blue'}}>Create account</Link>
            </p>
        </div>
    );
};

export default Login;