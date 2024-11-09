import React from 'react'
import about from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'


// React motion
import { motion } from "framer-motion"


const About = () => {
  return (
    <div className='border-bottom border-neutral-900 pb-4'>
      <h1 className='my-10 text-center text-4xl'>About <span className='text-neutral-400'>Me</span></h1>
        <div className='flex flex-wrap'>
          <motion.div
          whileInView={{opacity:1, x:0}}
          initial={{opacity: 0, x:-100}}
          transition={{duration:0.5}}
          className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center'> <img src={about} alt="" /> </div>
          </motion.div>
          <div className='w-full lg:w-1/2'>
              <div className='justify-center lg:justify-start'>
                <motion.p
                whileInView={{opacity:1, x:0}}
                initial={{opacity: 0, x:100}}
                transition={{duration:0.5}}
                className='py-2 mx-5 max-w-2xl text-1.75xl my-11 leading-8'>{ABOUT_TEXT}</motion.p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About
