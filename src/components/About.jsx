import React from 'react';
import aboutPic from '../assets/about1.jpeg';
import { ABOUT_TEXT } from '../constants';
import {motion} from 'framer-motion';

function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>About 
        <span className='text-neutral-500'> Me</span>
      </h2>
      <div className='flex flex-wrap'>
        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration:0.5}} className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center'>
                <img height={400} width={400} className='rounded' src={aboutPic} alt='about'/>
            </div>
        </motion.div>
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration:0.5}} className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
      </div>
    </div>
  )
}

export default About;