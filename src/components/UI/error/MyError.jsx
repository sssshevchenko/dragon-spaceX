import React from 'react';

const MyError = ({error}) => {
    return (
        <div style={{textAlign: 'center', marginTop: '100px'}}>
            <h2>An error occured: {error}</h2>
        </div>
    );
};

export default MyError;