import getPost from '@/app/lib/getPost';
import React from 'react';

const postPage = async ({ params }) => {
    const { id } = params;
    const post = await getPost(id)
    return (
        <div className='m-2'>
            <h2 className='my-2'>{post.title}</h2>
            <p>{post.body}</p>
            <dir>
                <h1 className='text-lg font-bold text-red-300'>Jakaria</h1>
            </dir>
        </div>
    );
};

export default postPage;