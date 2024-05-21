import React from 'react';
import logo from '../assets/logo12.png';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6 h-20'>
        <div className='flex flex-shrink-0 items-center w-20'>
          <img className='h-10 w-50' src={logo} alt='logo'/>
        </div>
        <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
        <a href='https://github.com/SSgoyni' target='_blank'>
          <FaGithub />
        </a>
        <a href='https://www.instagram.com/_smit_goyani_/' target='_blank'>
          <FaInstagram />
        </a>
        <a href='https://www.linkedin.com/in/smit-goyani-19216325a/' target='_blank'>
          <FaLinkedin />
        </a>
        <a href='https://x.com/smit_goyani' target='_blank'>
          <FaTwitterSquare />
        </a>
        </div>
    </nav>
  )
}

export default Navbar
