import React from 'react';
import getAllPosts from '../lib/getAllPosts';
import Link from 'next/link';

const page = async () => {
    const posts = await getAllPosts()
    return (
        <div>
            <h1 className='my-8 text-xl font-semibold'>posts page</h1>
            <ul className='mt-6'>
                {
                    posts.map(post => <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default page;