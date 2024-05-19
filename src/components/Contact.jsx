import React from 'react'
import { CONTACT } from '../constants';
import {motion} from 'framer-motion';
import {IoMail,IoLocationSharp} from 'react-icons/io5';
import {FaPhoneAlt} from 'react-icons/fa';

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration:0.5}} className='my-10 text-center text-4xl'>
        Contact
        <span className='text-neutral-500'> Me</span>
      </motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration:1}} className='flex items-center justify-center gap-1'>
          <IoLocationSharp />
          <p className='my-4'>{CONTACT.address}</p>
        </motion.div>
        {/* <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration:1}} className='flex items-center justify-center gap-1.5'>
          <FaPhoneAlt />
          <p className='my-4'>{CONTACT.phoneNo}</p>
        </motion.div> */}
        <div className='flex items-center justify-center gap-1.5'>
          <IoMail />
          <a href='#' className='border-b'>{CONTACT.email}</a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
