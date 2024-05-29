import React from 'react';
import {IoLogoFirebase} from 'react-icons/io5';
import {SiDart} from 'react-icons/si';
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

function snditTechnology() {
    return (
        <div className='border-b border-neutral-900 pb-24'>
            <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
          <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>

            <motion.div variants={iconVariants(2)} initial="initial" animate="animate">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <BiLogoFlutter className='text-7xl text-blue-400'/>
                </div>
                <span className='flex items-center justify-center mt-1 text-neutral-400'>Flutter</span>
            </motion.div>
    
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiDart className='text-7xl text-blue-600'/>
                </div>
                <span className='flex items-center justify-center mt-1 text-neutral-400'>Dart</span>
            </motion.div>

            <motion.div variants={iconVariants(4)} initial="initial" animate="animate">
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoFirebase className='text-7xl text-yellow-400'/>
                </div>
                <span className='flex items-center justify-center mt-1 text-neutral-400'>Firebase</span>
            </motion.div>
    
          </motion.div>
        </div>
      )
}

export default snditTechnology