import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const socils = [
    { icon: <FaGithub />, path: "https://github.com/visa-dev" },
    { icon: <FaLinkedin />, path: "https://linkedin.com/in/viraj-sachin-b6b838216" },
    { icon: <FaWhatsapp />, path: "https://wa.me/+94765496113" },

];

const Socils = () => {
    return (
        <div className="flex gap-6">
            {
                socils.map((item, index) => {
                    return <Link key={index} href={item?.path} className="flex items-center justify-center text-base duration-500 border rounded-full w-9 h-9 border-accent text-accent hover:bg-accent hover:text-primary hover:transition-all">
                        {item?.icon}
                    </Link>
                })
            }
        </div>
    )
}

export default Socils