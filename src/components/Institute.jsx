import React from 'react';
import { FaUniversity } from 'react-icons/fa';
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: delay },
  },
});

const Institute = ({ text }) => { // Use destructuring to get the text prop
  return (
    <motion.div
      variants={container(0)}
      initial="hidden"
      animate="visible"
      className='flex items-center text-3xl lg:mx-16 mb-2' // Added 'flex' and 'items-center' for alignment
    >
      <FaUniversity className='mr-2' /> {/* Rendered as a component */}
      {text} {/* Display the text */}
    </motion.div>
  );
};

export default Institute;
