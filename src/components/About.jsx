import React from 'react';
import aboutPic from '../assets/about1.jpeg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-10 text-center text-4xl'>
        About
        <span className='text-neutral-500'> Me</span>
      </motion.h2>
      <div className='flex flex-wrap'>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img height={400} width={400} className='rounded' src={aboutPic} alt='about' />
          </div>
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </div>
          <div className='flex justify-center lg:justify-start'>
            <a href='/Smit-Goyani-20250322.pdf' download="smit-goyani.pdf" className='mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded'>
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
