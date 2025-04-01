import React from 'react';
import Slider from 'react-slick';
import jewelleryStore1 from '../assets/projects/JewelleryStore/jewelleryStore1.jpg';
import js2 from '../assets/projects/JewelleryStore/js2.jpg';
import js3 from '../assets/projects/JewelleryStore/js3.jpg';
import js4 from '../assets/projects/JewelleryStore/js4.jpg';
import js5 from '../assets/projects/JewelleryStore/js5.jpg';
import js6 from '../assets/projects/JewelleryStore/js6.jpg';
import js7 from '../assets/projects/JewelleryStore/js7.jpg';
import js8 from '../assets/projects/JewelleryStore/js8.jpg';
import js9 from '../assets/projects/JewelleryStore/js9.jpg';
import js10 from '../assets/projects/JewelleryStore/js10.jpg';
import { motion } from 'framer-motion';
import { IoLinkSharp } from 'react-icons/io5';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

function JewelleryStore() {
  return (
    <div className='mb-8 flex gap-10 flex-wrap lg:justify-center'>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
          <Slider {...sliderSettings}>
            <div>
              <img src={jewelleryStore1} alt='Jewellery Store' width={350} height={350} className='mb-6 rounded' />
            </div>
            <div>
              <img src={js2} alt='Jewellery Store' width={350} height={350} className='mb-6 rounded' />
            </div>
            <div>
              <img src={js3} alt='Jewellery Store' width={350} height={350} className='mb-6 rounded' />
            </div>
            <div>
              <img src={js4} alt='Jewellery Store' width={350} height={350} className='mb-6 rounded' />
            </div>
            <div>
              <img src={js5} alt='Jewellery Store' width={350} height={350} className='mb-6 rounded' />
            </div>
            <div>
              <img src={js6} alt='Jewellery Store' width={350} height={350} className='mb-6 rounded' />
            </div>
            <div>
              <img src={js7} alt='Jewellery Store' width={350} height={350} className='mb-6 rounded' />
            </div>
            <div>
              <img src={js8} alt='Jewellery Store' width={350} height={350} className='mb-6 rounded' />
            </div>
            <div>
              <img src={js9} alt='Jewellery Store' width={350} height={350} className='mb-6 rounded' />
            </div>
            <div>
              <img src={js10} alt='Jewellery Store' width={350} height={350} className='mb-6 rounded' />
            </div>
          </Slider>
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>
            {/* <Link className='flex items-center gap-2' to='/projects/jewellery-store'> */}
              Jewellery Store
              {/* <IoLinkSharp /> */}
            {/* </Link> */}
          </h6>
          <p className='mb-4 text-neutral-400'>
            •Full Stack Online Business Management System using MERN stack with Redux and Cloudinary.<br />
            •Authentication, manage category and products, manage orders are some of the functionalities.<br />
            •Used for different users like Customers, Dealer, Admin and Owner.
          </p>
          <div className='flex flex-wrap'>
            <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>ReactJs</span>
            <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>NodeJs</span>
            <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>ExpressJs</span>
            <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>MongoDB</span>
          </div>  
        </motion.div>
      </div>
  )
}

export default JewelleryStore;