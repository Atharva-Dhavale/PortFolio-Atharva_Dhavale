import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=" /*mb-20*/ mb-15 flex items-center justify-between py-3 px-8">
      <div className="w-16 h-16 py-4 px-8 flex-shrink-0">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      <div className="mx-4 flex justify-center items-center gap-4 text-white text-2xl">
        <FaLinkedin />
        <FaInstagram />
        <FaGithub />
        <FaTwitter />
      </div>
    </nav>
  )
}

export default Navbar

