import React from 'react';
import {motion} from 'framer-motion';

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration:0.5}} className='my-20 text-center text-4xl'>Experience</motion.h2>
        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className='mb-2 text-sm text-neutral-400'>Jan 2024 - Mar 2025</motion.p>
                </div>
                <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Software Developer - 
                        <span className='text-sm text-purple-100'> MLVeda, Ahmedabad</span>
                    </h6>
                    <p className='mb-4 text-neutral-400'>
                        •Designed and developed user interfaces for web applications using ReactJs.< br />•Implemented responsive designs and optimized frontend performance.<br /> 
                        •Successfully executed shopify tasks of liquid and javascript to meet client requirements.<br />
                        •Implemented theme customizations, including creating custom sections and components.
                    </p>
                    <div className='flex flex-wrap'>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>ReactJs</span>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Html/Css</span>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>JavaScript</span>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Shopify</span>
                        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Liquid</span>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Experience
