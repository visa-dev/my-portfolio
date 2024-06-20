"use client";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import Image from 'next/image';

import logo from '../assets/profile/logo.png';

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },

]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className='flex items-center justify-center '>
                <CiMenuFries className="text-[32px] text-accent" />

            </SheetTrigger>
            <SheetContent>
                <div className='flex items-center justify-center mt-[80px] text-2'>
                    <Image src={logo} width={150} />

                </div>
               

                <nav className="flex flex-col items-center justify-center gap-6 mt-24">
                    {
                        links.map((link, index) => {
                            return <Link href={link.path} key={index} className={`${link.path === pathname && "text-xl text-accent border-b-2 border-accent"} capitalize  hover:text-accent transition-all`}>{link.name}</Link>
                        })
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
