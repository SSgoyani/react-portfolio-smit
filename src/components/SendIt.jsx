import React from 'react';
import Slider from 'react-slick';
import sendIt from '../assets/projects/SendIt/si1.jpg';
import si2 from '../assets/projects/SendIt/si2.jpg';
import si3 from '../assets/projects/SendIt/si3.jpg';
import si4 from '../assets/projects/SendIt/si4.jpg';
import si5 from '../assets/projects/SendIt/si5.jpg';
import si6 from '../assets/projects/SendIt/si6.jpg';
import si7 from '../assets/projects/SendIt/si7.jpg';
import si8 from '../assets/projects/SendIt/si8.jpg';
import si9 from '../assets/projects/SendIt/si9.jpg';
import si10 from '../assets/projects/SendIt/si10.jpg';
import si11 from '../assets/projects/SendIt/si11.jpg';
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

function SendIt() {
  return (
    <div className='mb-8 gap-10 mt-20 flex flex-wrap lg:justify-center'>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
          <Slider {...sliderSettings}>
            <div>
              <img src={sendIt} alt='SendIt' width={125} height={125} className='mb-6 ml-20 rounded' />
            </div>
            <div>
              <img src={si2} alt='SendIt' width={125} height={125} className='mb-6 ml-20 rounded' />
            </div>
            <div>
              <img src={si3} alt='SendIt' width={125} height={125} className='mb-6 ml-20 rounded' />
            </div>
            <div>
              <img src={si4} alt='SendIt' width={125} height={125} className='mb-6 ml-20 rounded' />
            </div>
            <div>
              <img src={si5} alt='SendIt' width={125} height={125} className='mb-6 ml-20 rounded' />
            </div>
            <div>
              <img src={si7} alt='SendIt' width={125} height={125} className='mb-6 ml-20 rounded' />
            </div>
            <div>
              <img src={si6} alt='SendIt' width={125} height={125} className='mb-6 ml-20 rounded' />
            </div>
            <div>
              <img src={si8} alt='SendIt' width={125} height={125} className='mb-6 ml-20 rounded' />
            </div>
            <div>
              <img src={si9} alt='SendIt' width={125} height={125} className='mb-6 ml-20 rounded' />
            </div>
            <div>
              <img src={si10} alt='SendIt' width={125} height={125} className='mb-6 ml-20 rounded' />
            </div>
            <div>
              <img src={si11} alt='SendIt' width={125} height={125} className='mb-6 ml-20 rounded' />
            </div>
          </Slider>
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>
            {/* <Link className='flex items-center gap-2' to='/projects/send-it'> */}
              SendIt
              {/* <IoLinkSharp /> */}
            {/* </Link> */}
          </h6>
          <p className='mb-4 text-neutral-400'>
            •A automated location based cloud media organization mobile application using Flutter.<br />
            •Automatic album creation based on city location.<br />
            •Arranges media files into cloud albums according to city.<br />
            •Has option for create album and upload media manually.
          </p>
          <div className='flex flex-wrap'>
            <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Flutter</span>
            <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Dart</span>
            <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Firebase</span>
          </div>
        </motion.div>
      </div>
  )
}

export default SendIt;