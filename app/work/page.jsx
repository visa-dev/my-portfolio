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
import project_2 from '../../assets/work/project_2.png';
import project_3 from '../../assets/work/project_3.png';
import project_4 from '../../assets/work/project_4.png';
import SliderButton from '@/components/SliderButton';

const projects = [
    {
        num: "01",
        category: "Mern Stack",
        title: "University Final Project 1",
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
        github: "https://github.com/visa-dev/Sport-System"
    },
    {
        num: "02",
        category: "React+Springboot",
        title: "University E-Commerce Subject Project ",
        decription: "Food Managment System",
        stack: [
            {
                name: "react"
            },
            {
                name: "springbbot"
            },
            {
                name: "mysql"
            }
        ],
        image: project_2,
        github: "https://github.com/SGopinath89/IT32322024FoodDelivery"
    }
    ,
    {
        num: "03",
        category: "Mern Stack",
        title: "University Final Project 2",
        decription: "Blood Managment System",
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
        image: project_3,
        github: "https://github.com/visa-dev/Blood_Banking_System"
    },
    {
        num: "04",
        category: "Flutter Mobile App",
        title: "Intern First Task",
        decription: "Task Chase App",
        stack: [
            {
                name: "flutter"
            },
            {
                name: "firbase"
            },
           
        ],
        image: project_4,
        github: "https://github.com/Ausetech/TaskApp-Mobile"
    },
 
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