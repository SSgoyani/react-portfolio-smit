import React from 'react';
import {SiCsharp} from 'react-icons/si';
import {BiLogoJava} from 'react-icons/bi';
import {BiLogoJavascript} from 'react-icons/bi';
import {SiDart} from 'react-icons/si';
import {FaDroplet} from 'react-icons/fa6';
import {TbBrandCpp} from 'react-icons/tb';
import {motion} from 'framer-motion';

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

function Languages() {
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Programming Languages</motion.h2>
      <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate">
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandCpp className='text-7xl text-white-600'/>
        </div>
            <span className='flex items-center justify-center mt-1 text-neutral-400'>C++</span>
        </motion.div>

        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate">
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoJava className='text-7xl text-orange-500'/>
        </div>
            <span className='flex items-center justify-center mt-1 text-neutral-400'>Java</span>
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate">
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoJavascript className='text-7xl text-yellow-400'/>
        </div>
            <span className='flex items-center justify-center mt-1 text-neutral-400'>Javascript</span>
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate">
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiDart className='text-7xl text-blue-400'/>
        </div>
            <span className='flex items-center justify-center mt-1 text-neutral-400'>Dart</span>
        </motion.div>

        <motion.div variants={iconVariants(4)} initial="initial" animate="animate">
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaDroplet className='text-7xl text-blue-700'/>
        </div>
            <span className='flex items-center justify-center mt-1 text-neutral-400'>Liquid</span>
        </motion.div>

        <motion.div variants={iconVariants(2)} initial="initial" animate="animate">
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiCsharp className='text-7xl text-purple-600'/>
        </div>
            <span className='flex items-center justify-center mt-1 text-neutral-400'>C#</span>
        </motion.div>
        
      </motion.div>
    </div>
  )
}

export default Languages;
