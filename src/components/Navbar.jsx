import React from 'react';
import logo1 from '../assets/download-removebg-preview.png';
import logo2 from '../assets/images-removebg-preview.png';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6 h-20'>
        <div className='flex flex-shrink-0 items-center w-20'>
            <img src={logo2} alt='logo'/>
        </div>
        <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
        <FaGithub />
        <FaInstagram />
        <FaLinkedin />
        <FaTwitterSquare />
        </div>
    </nav>
  )
}

export default Navbar
