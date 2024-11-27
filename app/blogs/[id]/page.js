import { notFound } from 'next/navigation';
import React from 'react';

const BlogPage = ({ params }) => {
    const { id } = params;
    if (id === '3') {
        notFound()
    }
    return (
        <div className='font-extrabold mt-6'>
            The blog id is:$ {id}
        </div>
    );
};

export default BlogPage;