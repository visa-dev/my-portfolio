"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsArrowRight, BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import { CiLink } from "react-icons/ci";


import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import { Item } from '@radix-ui/react-select';
import project_1 from '../../assets/work/project_1.png';
import SliderButton from '@/components/SliderButton';

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
        image: project_1,
        github: "www"
    },
    {
        num: "02",
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
        image: project_1,
        github: ""
    }
    ,
    {
        num: "03",
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
        image: project_1,
        github: ""
    },
    {
        num: "04",
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
        image: project_1,
        github: ""
    },
    {
        num: "05",
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
        image: project_1,
        github: ""
    }
];

const Work = () => {

    const [project, setProject] = useState(projects[0]);

    const handleSlideChnage = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }} animate={{
                opacity: 1, transition: {
                    duration: 0.4, delay: 2.4, ease: "easeIn"
                }
            }} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>

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
                            <div className='items-center p-2'>

                                <TooltipProvider delayDuration={10}>
                                    <Tooltip>
                                        <TooltipTrigger  >
                                            <BsGithub className='text-4xl text-white' />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <Link href={project.github}><p>Link to Repo<CiLink /></p></Link>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[460px] mb-12'
                            onSlideChange={handleSlideChnage}
                        >
                            {
                                projects.map((project, index) => {
                                    return <SwiperSlide key={index} className='w-full'>
                                        <div className='h-[400px] relative group flex justify-center items-center bg-pink-50/20'>
                                            <div className='relative w-full h-full'>
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className='object-cover'
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                })
                            }

                            <SliderButton
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hovee text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                iconStyles="" />
                        </Swiper>


                    </div>
                </div>

            </div>

        </motion.section>
    )
}

export default Work