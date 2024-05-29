import React from 'react';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JewelleryStore from './JewelleryStore';
import SendIt from './SendIt';

const sliderSettings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>
        Projects
      </motion.h2>
      <JewelleryStore />
      <SendIt />
    </div>
  );
}

export default Projects;
