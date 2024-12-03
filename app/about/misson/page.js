import Image from 'next/image';
import img from "@/public/images/thumb.jpg"
import Button from '@/app/components/Button';
import React from 'react';
const page = () => {
    return (
        <div>
            misson page
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam asperiores, nam expedita quod ratione, magni, earum saepe consequuntur adipisci perferendis quo impedit qui. Quam quo iste ullam omnis enim tempora.</p>
            <Button />
            <Image src={img} alt='group picture' />
        </div>
    );
};

export default page;