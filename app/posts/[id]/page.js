import getPost from '@/app/lib/getPost';
import React from 'react';

const postPage = async ({ params }) => {
    const { id } = params;
    const post = await getPost(id)
    return (
        <div className='m-2'>
            <h2 className='my-2'>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default postPage;