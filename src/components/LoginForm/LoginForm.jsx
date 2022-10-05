import React, { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const LoginForm = ({title, handleClick}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <div className="login__input">
                <MyInput 
                    type='text' 
                    placeholder='Email' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <MyInput 
                    type='password' 
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="login__btn">
                <MyButton 
                    onClick={() => handleClick(email, password)}
                >
                    {title}
                </MyButton>    
            </div>           
        </div>
    );
};

export default LoginForm;