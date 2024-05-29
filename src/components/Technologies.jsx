import React from 'react';
import {RiReactjsLine} from 'react-icons/ri';
import {SiMongodb} from 'react-icons/si';
import {SiBootstrap} from 'react-icons/si';
import {IoLogoFirebase} from 'react-icons/io5';
import {FaNodeJs} from 'react-icons/fa';
import {BiLogoPostgresql} from 'react-icons/bi';
import {BiLogoHtml5} from 'react-icons/bi';
import {BiLogoCss3} from 'react-icons/bi';
import {BiLogoFlutter} from 'react-icons/bi';
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

function Technologies() {
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
      <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>

        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate">
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoHtml5 className='text-7xl text-orange-600'/>
            </div>
            <span className='flex items-center justify-center mt-1 text-neutral-400'>HTML</span>
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate">
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoCss3 className='text-7xl text-blue-500'/>
            </div>
            <span className='flex items-center justify-center mt-1 text-neutral-400'>CSS</span>
        </motion.div>

        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate">
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiBootstrap className='text-7xl text-purple-600'/>
            </div>
            <span className='flex items-center justify-center mt-1 text-neutral-400'>Bootstrap</span>
        </motion.div>

        <motion.div variants={iconVariants(5)} initial="initial" animate="animate">
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <span className='flex items-center justify-center mt-1 text-neutral-400'>ReactJs</span>
        </motion.div>

        <motion.div variants={iconVariants(2)} initial="initial" animate="animate">
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </div>
            <span className='flex items-center justify-center mt-1 text-neutral-400'>NodeJs</span>
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate">
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoFlutter className='text-7xl text-blue-400'/>
            </div>
            <span className='flex items-center justify-center mt-1 text-neutral-400'>Flutter</span>
        </motion.div>

        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate">
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </div>
            <span className='flex items-center justify-center mt-1 text-neutral-400'>MongoDB</span>
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate">
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoFirebase className='text-7xl text-yellow-400'/>
            </div>
            <span className='flex items-center justify-center mt-1 text-neutral-400'>Firebase</span>
        </motion.div>

        <motion.div variants={iconVariants(1)} initial="initial" animate="animate">
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql className='text-7xl text-sky-700'/>
            </div>
            <span className='flex items-center justify-center mt-1 text-neutral-400'>PostgreSQL</span>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies;
