import React from 'react'

import './navbar.css'

import {AiFillHome} from 'react-icons/ai'

import {FaUserAlt} from 'react-icons/fa'

import {BsFillBookFill} from 'react-icons/bs'

import {RiServiceFill} from 'react-icons/ri'

import {RiMessageFill} from 'react-icons/ri'

import {RiTaskFill} from 'react-icons/ri'

import {FiLink} from 'react-icons/fi'

import { useState } from 'react'

const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (

    <nav>

      <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : '' }><AiFillHome/></a>

      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active' : '' }><FaUserAlt/></a>

      <a href="#skill" onClick={() => setActiveNav('#skill')} className={activeNav==='#skill' ? 'active' : '' }><BsFillBookFill/></a>

      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav==='#services' ? 'active' : '' }><RiServiceFill/></a>

      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav==='#projects' ? 'active' : '' }><RiTaskFill/></a>

      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : '' }><RiMessageFill/></a>

      <a href="#footer" onClick={() => setActiveNav('#footer')} className={activeNav==='#footer' ? 'active' : '' }><FiLink/></a>

    </nav>
    
  )

}

export default Navbar