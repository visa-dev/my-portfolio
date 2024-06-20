"use client";

import { FaHtml5, Facss3, FaJs, FaReact, FaNodeJs, FaCss3, FaFigma, FaJava } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiSpringboot, SiExpress, SiC, SiCsharp, SiCplusplus, SiFlutter, SiMongodb, SiMysql } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CiStar } from "react-icons/ci";
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CiLink } from "react-icons/ci";

import cet1 from '../../assets/resume/cet1.png';
import cet2 from '../../assets/resume/cet2.jpeg';
import Link from 'next/link';

const about =
{
  title: "About me",
  description: "I am quick learner with solid tech experience",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Viraj Sachin"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 765496113"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ year"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri lankan"
    },
    {
      fieldName: "Email",
      fieldValue: "virajsachin33@gmail.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "English | Sinhala"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri lankan"
    },


  ]
};

const experience =
{
  icon: '/assets/resum/badge.svg',
  title: 'My experience',
  description: "I am quick learner with solid tech experience",
  items: [
    {
      company: "Aus-eTec Pvt Ltd",
      position: "Intern Full Stack (Mobile) Developer",
      duration: "2024 - Present"
    },

  ]
};

const education =
{
  icon: '/assets/resum/cap.svg',
  title: 'My education',
  description: "",
  items: [
    {
      institution: "University Of Jaffna",
      digree: "BSc Information Technology (R)",
      result: [
        {
          subject: "Current Gpa",
          pass: "3.5"
        }
      ],
      duration: "2021-Present"
    },
    {
      institution: "St' Mary's Collage Kegalle",
      digree: "Advanced Level",
      result: [
        {
          subject: "Physics",
          pass: "C"
        },
        {
          subject: "Combined Maths",
          pass: "C"
        },
        {
          subject: "Information Technology",
          pass: "C"
        },

      ],
      duration: "2018-2019"
    },
    {
      institution: "St' Mary's Collage Kegalle",
      digree: "Ordinary Level",
      result: [
        {
          subject: "Mathamtics",
          pass: "A"
        },
        {
          subject: "Information Technology",
          pass: "A"
        },
        {
          subject: "Business Studies",
          pass: "A"
        },
        {
          subject: "Sinhala Literaturer",
          pass: "A"
        },
        {
          subject: "Buddhist",
          pass: "A"
        },
        {
          subject: "History",
          pass: "B"
        },
        {
          subject: "Sinhala",
          pass: "B"
        },
        {
          subject: "Science",
          pass: "C"
        },
        {
          subject: "English",
          pass: "C"
        }
      ],
      duration: "2010-2016"
    },
  ]
};

const skills =
{
  title: 'My skills',
  description: "I have good experience and knowledge of following  technologies",
  skillList: [
    {
      icon: <FaJs />,
      digree: "javascript",
      star: ["*", "*", "*", "*", "*"],
      level: 4
    },

    {
      icon: <SiExpress />,
      digree: "express.js",
      star: ["*", "*", "*", "*", "*"],
      level: 4
    },

    {
      icon: <FaReact />,
      digree: "react.js",
      star: ["*", "*", "*", "*", "*"],
      level: 4
    },
    {
      icon: <SiNextdotjs />,
      digree: "next.js",
      star: ["*", "*", "*", "*", "*"],
      level: 3
    },
    {
      icon: <FaNodeJs />,
      digree: "node.js",
      star: ["*", "*", "*", "*", "*"],
      level: 4
    },
    {
      icon: <FaJava />,
      digree: "java",
      star: ["*", "*", "*", "*", "*"],
      level: 4
    },
    {
      icon: <SiC />,
      digree: "C",
      star: ["*", "*", "*", "*", "*"],
      level: 4
    },
    {
      icon: <SiCplusplus />,
      digree: "C++",
      star: ["*", "*", "*", "*", "*"],
      level: 4
    },
    {
      icon: <SiCsharp />,
      digree: "c#",
      star: ["*", "*", "*", "*", "*"],
      level: 4
    },

    {
      icon: <SiTailwindcss />,
      digree: "tailwind.css",
      star: ["*", "*", "*", "*", "*"],
      level: 4
    },
    {
      icon: <SiSpringboot />,
      digree: "springBoot",
      star: ["*", "*", "*", "*", "*"],
      level: 4
    },
    {
      icon: <SiMongodb />,
      digree: "mongodb",
      star: ["*", "*", "*", "*", "*"],
      level: 4
    },
    {
      icon: <SiMysql />,
      digree: "mysql",
      star: ["*", "*", "*", "*", "*"],
      level: 4
    },
    {
      icon: <FaHtml5 />,
      digree: "html",
      star: ["*", "*", "*", "*", "*"],
      level: 4
    },
    {
      icon: <FaCss3 />,
      digree: "css 3",
      star: ["*", "*", "*", "*", "*"],
      level: 4
    },
    {
      icon: <FaFigma />,
      digree: "figma",
      star: ["*", "*", "*", "*", "*"],
      level: 3

    },
  ]
};


const certificate =
{
  title: 'My certificates',
  description: "Temp text",
  item: [
    {
      event: "CodesPark",
      place: "2 Runner Up",
      certificateImg: cet1,
      link:"https://apps.vau.ac.lk/verifycertificate/download/2023/2023000003/UOVITCS20230006.pdf"
    },
    {
      event: "IEE Code Event",
      place: "2 Runner Up",
      certificateImg: cet2,
       link:"https://apps.vau.ac.lk/verifycertificate/download/2023/2023000003/UOVITCS20230006.pdf"
    }
  ]

};
const Resume = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-8'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skill">Skills</TabsTrigger>
            <TabsTrigger value="certificate">Cetificates</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>

                <ScrollArea className="h-[400px] ">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return <li key={index}
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                      >
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60 '>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>


            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>


                <ScrollArea className="h-[400px] overflow-visible ">
                  <ul className='grid grid-cols-1 lg:grid-cols-1 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return <li key={index}
                        className='bg-[#232329] py-6 px-10 rounded-xl flex flex-col  items-center lg:items-start gap-1'
                      >
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[460px] min-h-[20px] text-center lg:text-left'>{item.digree}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white '>{item.institution}</p>
                        </div>
                        <div className='flex flex-col '>
                          {
                            item.result.map((result, index) => {
                              return <p key={index} className='text-white/60'>
                                {result.subject} : {result.pass}
                              </p>
                            })
                          }
                        </div>
                      </li>

                    })}

                  </ul>
                </ScrollArea>
              </div>


            </TabsContent>

            <TabsContent value="skill" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>

                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-4 gap-[30px]'>
                    {skills.skillList.map((item, index) => {
                      return (
                        <li key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center  gap-1'
                        >

                          <TooltipProvider delayDuration={100}>
                            <Tooltip >
                              <TooltipTrigger className='w-full h-[150px] bg-[#222329] rounded-xl flex justify-center group'>
                                <div className='flex flex-col items-center justify-center gap-4' >
                                  <div className='text-6xl '>
                                    {item.icon}
                                  </div>
                                  <div>
                                    <h3>{item.digree}</h3>
                                  </div>
                                  <div className='flex gap-1 xl:gap-1 md:gap-4'>
                                    {
                                      item.star.map((_, index) => {

                                        return item.level > index ? (<CiStar className='text-accent' />) : (<CiStar />);

                                      })
                                    }
                                  </div>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-black text-white/90">
                                <p>{item.digree}</p>
                              </TooltipContent>

                            </Tooltip>
                          </TooltipProvider>

                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>


            </TabsContent>

            <TabsContent value="certificate" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{certificate.title}</h3>


                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {certificate.item.map((item, index) => {
                      return (
                        <li key={index}
                          className='bg-[#232329] h-[284px] w-full p-5 rounded-xl flex flex-col justify-center  gap-1'
                        >

                          <TooltipProvider delayDuration={100}>
                            <Tooltip >
                              <TooltipTrigger className='w-full h-[350px] bg-[#222329] rounded-xl flex justify-center group'>
                                <div className='flex flex-col items-center justify-center gap-4' >
                                  <div>
                                    {item.event}
                                  </div>
                                  <div class='flex gap-1 xl:gap-1 md:gap-4'>
                                    <Image priority src={item.certificateImg} width={200}  />
                                  </div>
                                
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-black text-white/90">
                              <Link href={item.link}><CiLink/></Link> <p>{item.event}</p>
                              </TooltipContent>

                            </Tooltip>
                          </TooltipProvider>

                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>

            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>

                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[820px] mx-auto xl:mx-0 xl:gap-x-20 '>
                  {
                    about.info.map((item, index) => {
                      return <li key={index} className='flex items-center justify-center gap-4 xl:justify-start'>
                        <span className='text-white/60'>{item.fieldName}</span >
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    })
                  }
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>

      </div>
    </motion.div>
  )
}

export default Resume
