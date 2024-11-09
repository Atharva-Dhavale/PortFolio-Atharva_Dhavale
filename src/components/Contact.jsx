import React from 'react'
import { CONTACT } from '../constants'

// React motion
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1
        whileInView={{opacity:1, x:0}}
        initial={{opacity: 0, x:100}}
        transition={{duration:0.5}}
        className='mt-10 mb-5 text-center text-4xl'>have something in ur mind?</motion.h1>
        <motion.h2
        whileInView={{opacity:1, x:0}}
        initial={{opacity: 0, x:-100}}
        transition={{duration:0.5}}
         className='mb-10 text-center text-2xl'>get in touch!</motion.h2>
        <motion.div
          whileInView={{opacity:1, y:0}}
          initial={{opacity: 0, y:100}}
          transition={{duration:0.5}} className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <p className='my-4'>{CONTACT.email}</p>
        </motion.div>

    </div>
  )
}

export default Contact
