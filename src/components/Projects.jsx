import React from 'react';
import Slider from 'react-slick';
import sendIt from '../assets/projects/SendIt/sendIt.jpg';
import jewelleryStore from '../assets/projects/JewelleryStore/jewelleryStore.jpg';
import { motion } from 'framer-motion';
import { IoLinkSharp } from 'react-icons/io5';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>
        Projects
      </motion.h2>
      <div className='mb-8 flex gap-10 flex-wrap lg:justify-center'>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
          <Slider {...sliderSettings}>
            <div>
              <img src={jewelleryStore} alt='Jewellery Store' width={350} height={350} className='mb-6 rounded' />
            </div>
            <div>
              <img src={jewelleryStore} alt='Jewellery Store' width={350} height={350} className='mb-6 rounded' />
            </div>
            <div>
              <img src={jewelleryStore} alt='Jewellery Store' width={350} height={350} className='mb-6 rounded' />
            </div>
            <div>
              <img src={jewelleryStore} alt='Jewellery Store' width={350} height={350} className='mb-6 rounded' />
            </div>
          </Slider>
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>
            <a className='flex items-center gap-2' href=''>
              Jewellery Store
              <IoLinkSharp />
            </a>
          </h6>
          <p className='mb-4 text-neutral-400'>
            •Full Stack Online Business Management System using MERN stack with Redux and Cloudinary.<br />
            •Authentication, manage category and products, manage orders are some of the functionalities.<br />
            •Used for different users like Customers, Dealer, Admin and Owner.
          </p>
          <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>ReactJs</span>
          <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>NodeJs</span>
          <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>ExpressJs</span>
          <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>MongoDB</span>
        </motion.div>
      </div>
      <div className='mb-8 gap-10 mt-20 flex flex-wrap lg:justify-center'>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
          <Slider {...sliderSettings}>
            <div>
              <img src={sendIt} alt='SendIt' width={125} height={125} className='mb-6 ml-20 rounded' />
            </div>
            <div>
              <img src={sendIt} alt='SendIt' width={125} height={125} className='mb-6 ml-20 rounded' />
            </div>
            <div>
              <img src={sendIt} alt='SendIt' width={125} height={125} className='mb-6 ml-20 rounded' />
            </div>
            <div>
              <img src={sendIt} alt='SendIt' width={125} height={125} className='mb-6 ml-20 rounded' />
            </div>
          </Slider>
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>
            <a className='flex items-center gap-2' href=''>
              SendIt
              <IoLinkSharp />
            </a>
          </h6>
          <p className='mb-4 text-neutral-400'>
            •A automated location based cloud media organization mobile application using Flutter.<br />
            •Automatic album creation based on city location.<br />
            •Arranges media files into cloud albums according to city.<br />
            •Has option for create album and upload media manually.
          </p>
          <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Flutter</span>
          <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Dart</span>
          <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Firebase</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
