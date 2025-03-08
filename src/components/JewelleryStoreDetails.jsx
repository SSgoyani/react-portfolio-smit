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
import { Link } from 'react-router-dom';
import './JewelleryStoreDetails.css';

const images = [
  { src: jewelleryStore1, alt: 'Jewellery Store 1', className: 'span-2-col span-2-row' },
  { src: js2, alt: 'Jewellery Store 2', className: '' },
  { src: js3, alt: 'Jewellery Store 3', className: 'span-2-row' },
  { src: js4, alt: 'Jewellery Store 4', className: '' },
  { src: js5, alt: 'Jewellery Store 5', className: 'span-2-col' },
  { src: js6, alt: 'Jewellery Store 6', className: '' },
  { src: js7, alt: 'Jewellery Store 7', className: 'span-2-row' },
  { src: js8, alt: 'Jewellery Store 8', className: 'span-2-col' },
  { src: js9, alt: 'Jewellery Store 9', className: '' },
  { src: js10, alt: 'Jewellery Store 10', className: '' }
];

function JewelleryStoreDetails() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="ProjectTitle text-4xl mb-2 tracking-tight text-yellow-500 lg:text-6xl">Jewellery Store</h1>
          <span className="text-lg lg:text-2xl italic text-gray-300">ECommerce Web App</span>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="mt-10 grid-container"
        >
          {images.map((image, index) => (
            <div key={index} className={`grid-item ${image.className}`}>
              <img src={image.src} alt={image.alt} />
              <div className="overlay">
                <span>{image.alt}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4 text-yellow-500">Project Description</h2>
          <p className="text-lg text-gray-300">
            The Jewellery Store is a fully functional e-commerce web application designed to provide a seamless online shopping experience for jewellery enthusiasts. Built using the MERN stack (MongoDB, Express.js, React, Node.js), this platform offers a variety of features that are essential for any modern e-commerce website. 
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-300">
            <li>User authentication and authorization</li>
            <li>Product browsing and searching</li>
            <li>Shopping cart and checkout functionality</li>
            <li>Order management for users and admins</li>
            <li>Responsive design for mobile and desktop users</li>
          </ul>
        </div>

        <div className="mt-12">
          <JewelleryTechnology />
        </div>

        <div className="mt-12 text-center">
          <Link to="/projects" className="text-yellow-500 hover:text-yellow-300 text-lg">
            <IoLinkSharp className="inline-block mr-2" />
            View More Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JewelleryStoreDetails;
