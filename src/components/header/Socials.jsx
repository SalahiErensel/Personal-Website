import React from 'react'

import {BsLinkedin} from 'react-icons/bs'

import {BsGithub} from 'react-icons/bs'

import {BsInstagram} from 'react-icons/bs'

const Socials = () => {

  return (

    <div className='header__socials'>

        <a href = "https://linkedin.com/in/salahi-erensel/" target= "_blank"><BsLinkedin/></a>

        <a href = "https://github.com/SalahiErensel" target= "_blank"><BsGithub/></a>

        <a href = "https://instagram.com/salahierensel/" target= "_blank"><BsInstagram/></a>
        
    </div>

  )

}

export default Socials