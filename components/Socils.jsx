import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const socils = [
    { icon: <FaGithub />, path: "https://github.com/visa-dev" },
    { icon: <FaLinkedin />, path: "https://linkedin.com/in/viraj-sachin-b6b838216" },
    { icon: <FaWhatsapp />, path: "" },

];

const Socils = () => {
    return (
        <div className="flex gap-6">
            {
                socils.map((item, index) => {
                    return <Link key={index} href={item?.path} className="w-9 h-9 border-accent border rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500">
                        {item?.icon}
                    </Link>
                })
            }
        </div>
    )
}

export default Socils