import React from 'react';
import {motion} from 'framer-motion';

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration:0.5}} className='my-20 text-center text-4xl'>Education</motion.h2>
        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className='mb-2 text-sm text-neutral-400'>2020 - 2024</motion.p>
                    {/* <motion.img className='rounded' height={350} width={350} whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} src={degree} alt='Dharmsinh Desai University'/> */}
                </div>
                <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'> 
                    <h6 className='font-semibold'>B.Tech in Information Technology,
                    </h6>
                    <div className='flex flex-col'>
                        <span className='mb-2 mt-1 text-sm text-purple-100'>Dharmsinh Desai University, Nadiad</span>
                        <span className='text-sm mt-1 text-purple-400'>CPI : 7.89</span>
                    </div>

                    <p className='mt-3 text-neutral-300'>Courses :</p>
                    <div className='flex flex-wrap'>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Data Structures & Algorithms</span>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Operating System</span>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Computer Networks</span>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Database Management Syatem</span>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Network Security</span>
                    </div>
                </motion.div>
            </div>

            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className='mb-2 text-sm text-neutral-400'>2018 - 2020</motion.p>
                </div>
                <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'> 
                    <h6 className='font-semibold'>Higher Secondary School,
                    </h6>
                    <div className='flex flex-col'>
                        <span className='mb-2 mt-1 text-sm text-purple-100'>Ashadeep Group of Schools, Surat</span>
                        <span className='text-sm mt-1 text-purple-400'>Percentage : 85.34%</span>
                    </div>
                </motion.div>
            </div>

            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className='mb-2 text-sm text-neutral-400'>2016 - 2018</motion.p>
                </div>
                <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'> 
                    <h6 className='font-semibold'>Secondary School (Std. 10),
                    </h6>
                    <div className='flex flex-col'>
                        <span className='mb-2 mt-1 text-sm text-purple-100'>Ashadeep Group of Schools, Surat</span>
                        <span className='text-sm mt-1 text-purple-400'>Percentage : 90.67%</span>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Education
