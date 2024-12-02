'use client'
import React from 'react';

const Button = () => {
    return (
        <div className='m-8 '>
            <button className='bg-red-500 rounded-sm px-4 py-2' onClick={() => console.log('I have clicked hare')}>
                click hare
            </button>
        </div>
    );
};

export default Button;