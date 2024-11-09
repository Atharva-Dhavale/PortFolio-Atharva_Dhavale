import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import { SiDjango, SiNodedotjs, SiPostgresql, SiMongodb, SiCplusplus } from "react-icons/si"

// React motion
import { motion } from "framer-motion"


const iconvar = (duration)=>({
  initial:{y: -10},
  animate: {
    y: [10,-10],
    transition:{
      duration:duration,
      ease: "linear", // Corrected to use the imported linear function
      repeat: Infinity, // Corrected to Infinity
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className='border-bottom border-neutral-800 pb-24'>
      <motion.h1
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
       className='my-20 text-center text-4xl'>Technologies</motion.h1>
      <motion.div
      whileInView={{opacity:1,x: 0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
      className='flex flex-wrap items-center justify-center gap-4'>
        {/* React icon */}
        <motion.div
        variants={iconvar(1)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-300'/>
        </motion.div>
        {/* CPP */}
        <motion.div
        variants={iconvar(2)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiCplusplus className='text-7xl text-blue-800'/>
        </motion.div>
        {/* Node icon */}
        <motion.div
        variants={iconvar(5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiDjango className='text-7xl text-green-300'/>
        </motion.div>
        {/* Express icon */}
        <motion.div
        variants={iconvar(6)}
        initial="initial"
        animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiNodedotjs className='text-7xl text-black-300'/>
        </motion.div>
        {/* Mondo DB */}
        <motion.div
        variants={iconvar(4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-900'/>
        </motion.div>
        {/* PostGres */}
        <motion.div
        variants={iconvar(5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiPostgresql className='text-7xl text-sky-700'/>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies
