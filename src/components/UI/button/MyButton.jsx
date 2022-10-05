import React from 'react';
import classes from '../button/MyButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
        <div {...props} className={classes.myBtn}>
            {children}
        </div>
    );
};

export default MyButton;