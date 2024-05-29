import React from 'react';
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
import JewelleryTechnology from '../components/jewelleryTechnology';
import { motion } from 'framer-motion';
import { IoLinkSharp } from 'react-icons/io5';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import './JewelleryStoreDetails.css';

const sliderSettings = {
  dots: false,
  arrows: true,
  // fade: true,
  infinite: true,
  speed: 1900,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

function JewelleryStoreDetails() {
  return (
    <div>
      <div className=''>
        <h1 className='ProjectTitle text-4xl mb-5 tracking-tight text-yellow-500 lg:text-7xl'>Jewellery Store</h1>
        <span className='text-1xl lg:text-2xl italic'> - ECommerce Web App</span>

        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full'>
          <Slider {...sliderSettings}>
            <div>
              <img src={jewelleryStore1} alt='Jewellery Store' width={900}  className='mb-6 rounded' />
            </div>
            <div>
              <img src={js2} alt='Jewellery Store' width={900}  className='mb-6 rounded' />
            </div>
            <div>
              <img src={js3} alt='Jewellery Store' width={900}  className='mb-6 rounded' />
            </div>
            <div>
              <img src={js4} alt='Jewellery Store' width={900}  className='mb-6 rounded' />
            </div>
            <div>
              <img src={js5} alt='Jewellery Store' width={900}  className='mb-6 rounded' />
            </div>
            <div>
              <img src={js6} alt='Jewellery Store' width={900}  className='mb-6 rounded' />
            </div>
            <div>
              <img src={js7} alt='Jewellery Store' width={900}  className='mb-6 rounded' />
            </div>
            <div>
              <img src={js8} alt='Jewellery Store' width={900}  className='mb-6 rounded' />
            </div>
            <div>
              <img src={js9} alt='Jewellery Store' width={900}  className='mb-6 rounded' />
            </div>
            <div>
              <img src={js10} alt='Jewellery Store' width={900}  className='mb-6 rounded' />
            </div>
          </Slider>
        </motion.div>
      </div>

      <JewelleryTechnology />
    </div>
  )
}

export default JewelleryStoreDetails;