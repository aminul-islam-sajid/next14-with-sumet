'use client'
import React from 'react';
const page = () => {
    return (
        <div>
            mission page
            <div className='m-8'>
                <button onClick={() => console.log('I have clicked hare')}>
                    click hare
                </button>
            </div>
        </div>
    );
};

export default page;