import React from 'react'
import {HERO_CONTENT} from "../constants"
import ProfilePhoto from "../assets/ProfilePhoto.jpeg"
// React motion
import { motion } from "framer-motion"
import { FaUniversity } from 'react-icons/fa';

//container for motion fun
const container = (delay) => ({
  hidden : {x: -100, opacity: 0},
  visible:{
    x: 0,
    opacity: 1,
    transition:{ duration: 0.5, delay: delay},
  },
});

const container2 = (delay) => ({
  hidden : {x: +100, opacity: 0},
  visible:{
    x: 0,
    opacity: 1,
    transition:{ duration: 0.5, delay: delay},
  },
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 '>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1 
                  variants={container(0)}
                  initial="hidden"
                  animate="visible"
                className='pb-0 text-6xl font-thin tracking-tight lg:mt-16 lg:mb-8 lg:mx-16 lg:text-8xl text-center lg:text-left'>
                     Atharva Dhavale    
                </motion.h1>

                <motion.div 
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                  className='flex items-center text-xl-1/2 lg:mt-1 lg:mx-16 mb-2'>
                  <FaUniversity className='mr-2' /> 
                  Pune Institute of Computer Technology 
                </motion.div>

                <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center lg:mx-16 mb-5'>
                    Full Stack Web Developer
                </motion.span>
                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className='max-w-xl py-6 font-light leading-8 tracking-tighter lg:mx-16 lg:text-left my-0'>{HERO_CONTENT}</motion.p>
            </div>
        </div>
            <div className='w-full lg:w-1/2 lg:px-8 lg:py-8'>
                <div className='flex justify-normal'>
                    <motion.img
                    initial={{x: 100, opacity:0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1,delay:1.2}}
                    src={ProfilePhoto} alt="Atharva" className='rounded-lg w-15px' />
                </div>
            </div>
      </div>
    </div>
  )
}

export default Hero
