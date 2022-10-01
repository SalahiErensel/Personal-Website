import React from 'react'

import './footer.css'

import {FaFacebookSquare} from 'react-icons/fa'

import {FaInstagramSquare} from 'react-icons/fa'

import {FaGithubSquare} from 'react-icons/fa'

import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {

  return (


    <footer>

    <section id="footer">

       <a href="#" className='footer__logo'>Salahi Erensel</a>

       <ul className='permalinks'>

        <li><a href="#">Home</a></li>

        <li><a href="#about">About Me</a></li>
        
        <li><a href="#skill">My Skills</a></li>
        
        <li><a href="#services">My Services</a></li>
        
        <li><a href="#projects">My Projects</a></li>
        
        <li><a href="#contact">Contact Me</a></li>
       
       </ul>

       <div className="footer__socials">

          <a href="https://facebook.com/salahierensel07"><FaFacebookSquare/></a>

          <a href="https://instagram.com/salahierensel/"><FaInstagramSquare/></a>

          <a href="https://github.com/SalahiErensel"><FaGithubSquare/></a>

          <a href="https://linkedin.com/in/salahi-erensel/"><BsLinkedin/></a>

       </div>

       <div className="footer__copyright">

        <small>&copy; Copyright Salahi Erensel. All rights reserved. Do not copy,reproduct or distribute. </small>

       </div>

       </section>
    
    </footer>

  )

}

export default Footer