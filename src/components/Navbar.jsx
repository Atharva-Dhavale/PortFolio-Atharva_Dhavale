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
        {/* <FaLinkedin />
        <FaInstagram />
        <FaGithub />
        <FaTwitter /> */}

<a href="https://www.linkedin.com/in/atharva-dhavale-a628842b9/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/atharva_dhavale_1815/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/Atharva-Dhavale" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </nav>
  )
}

export default Navbar

