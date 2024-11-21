import Link from 'next/link';
import React from 'react';

const blogs = () => {
    const Blogs = [{
        id: 1,
        title: "Blog 1",
        description: "Blog 1 description"

    }, {
        id: 2,
        title: "Blog 2",
        description: "Blog 2 description"

    }]
    return (
        <main className='m-4'>
            <ul>
                {Blogs.map(Blog =>
                    <li className='mb-5' key={Blog.id}>
                        <Link href={`/blogs/${Blog.id}`}> {Blog.title}</Link>
                    </li>)}
            </ul>
        </main>
    );
};

export default blogs;