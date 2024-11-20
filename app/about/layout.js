import Link from 'next/link';
import React from 'react';

const AboutLAyout = ({ children }) => {
    return (
        <div>
            <ul className="flex gap-6">
                <li><Link href={'about/misson'}>Mission</Link></li>
                <li><Link href={'about/vision'}>Vision</Link></li>
            </ul>
            {children}
        </div>
    );
};

export default AboutLAyout;