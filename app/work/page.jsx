"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsArrowRight, BsGithub } from 'react-icons/bs';
import Image from 'next/image';


import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';


const projects = [
    {
        num: "01",
        category: "Mern Stack",
        title: "Project 1",
        decription: "Sport Managment System",
        stack: [
            {
                name: "react"
            },
            {
                name: "express.js"
            },
            {
                name: "node.js"
            },
            {
                name: "mongodb"
            }
        ],
        image: "",
        github: ""
    },
    {
        num: "01",
        category: "Mern Stack",
        title: "Project 1",
        decription: "Sport Managment System",
        stack: [
            {
                name: "react"
            },
            {
                name: "express.js"
            },
            {
                name: "node.js"
            },
            {
                name: "mongodb"
            }
        ],
        image: "",
        github: ""
    }
    ,
    {
        num: "01",
        category: "Mern Stack",
        title: "Project 1",
        decription: "Sport Managment System",
        stack: [
            {
                name: "react"
            },
            {
                name: "express.js"
            },
            {
                name: "node.js"
            },
            {
                name: "mongodb"
            }
        ],
        image: "",
        github: ""
    },
    {
        num: "01",
        category: "Mern Stack",
        title: "Project 1",
        decription: "Sport Managment System",
        stack: [
            {
                name: "react"
            },
            {
                name: "express.js"
            },
            {
                name: "node.js"
            },
            {
                name: "mongodb"
            }
        ],
        image: "",
        github: ""
    },
    {
        num: "01",
        category: "Mern Stack",
        title: "Project 1",
        decription: "Sport Managment System",
        stack: [
            {
                name: "react"
            },
            {
                name: "express.js"
            },
            {
                name: "node.js"
            },
            {
                name: "mongodb"
            }
        ],
        image: "",
        github: ""
    }
];

const Work = () => {

    const [project, setProject] = useState(projects[0]);
    return (
        <motion.section
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>

            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] h-[460px] flex flex-col xl:justify-between order-2  xl:order-none'>
                        <div>
                            <div className='text-6xl font-extrabold leading-none text-transparent text-outline'>
                                {project.num}
                            </div>

                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category}</h2>
                            <p className='text-white/60'>{project.decription}</p>

                            <ul className='flex gap-4'>
                                {
                                    project.stack.map((item, index) => {
                                        return (
                                            <li key={index} className='text-xl text-accent'>{item.name}
                                                {index !== project.stack.length - 1 && ","}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className='border border-white/20'></div>
                            <div>
                                <Link href={project.github} >
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <BsGithub />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Git hub</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%] h-[460px]'>
                        <Swiper>
                            {
                                projects.map((project, index) => {
                                    return <SwiperSlide key={index}>

                                    </SwiperSlide>
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>

        </motion.section>
    )
}

export default Work