"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';

const services = [
  {
    'number': "01",
    'title': 'Web Development',
    'description': 'We provide cutting-edge web development services using the latest technologies.',
    'href': '',
  },
  {
    'number': "02",
    'title': 'Mobile App Development',
    'description': 'We create high-quality mobile applications for both Android and iOS platforms.',
    'href': '',
  },
  {
    'number': "03",
    'title': 'Web Development',
    'description': 'We provide cutting-edge web development services using the latest technologies.',
    'href': '',
  },
  {
    'number': "04",
    'title': 'Mobile App Development',
    'description': 'We create high-quality mobile applications for both Android and iOS platforms.',
    'href': '',
  },
];

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-8'>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {
            services.map((item, index) => {
              return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{item.number}</div>
                  <Link href={item.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500
                  flex justify-center items-center  hover:-rotate-45'>
                    <BsArrowDownRight className='text-primary text-3xl' />
                  </Link>

                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 '>{item.title}</h2>
                <p className='text-white/60' >{item.description}</p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Services