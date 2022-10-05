import React from 'react';
import classes from '../input/MyInput.module.css';

const MyInput = ({...props}) => {
    return (
        <input {...props} className={classes.myInput} />
    );
};

export default MyInput;