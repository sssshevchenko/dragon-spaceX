import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import { RouteNames } from '../../router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/auth/authSlice';

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate(RouteNames.MAINDRAGON)
            })
            .catch(console.error)
    }

    return (
        <div className='login'>
            <h1>Register</h1>
            <LoginForm 
                title='sign up'
                handleClick={handleRegister}
            />
            <p style={{marginTop: '10px', fontSize:'13px'}}>
                Already have an account? <Link to={RouteNames.LOGIN} style={{textDecoration: 'none', color: 'blue'}}>Sign in</Link>
            </p>
        </div>
    );
};

export default Register;