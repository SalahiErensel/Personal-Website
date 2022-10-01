import React from 'react'

import './header.css'

import Button from './Button'

import Me from  '../../assets/myimage.png'

import Socials from './Socials'

const Header = () => {

  return (

    <header>

      <div className="container header__container">
        
        <h1>
          
         <b>
          
          <i>

          Salahi Erensel
            
            </i>
            
            </b>
          
        </h1>

        <h2>
          
          <b>Software Engineer</b>
          
        </h2> 

        <Button />

        <Socials/>

        <div className="me">

          <img src = {Me} alt='me' />

        </div>
         
      </div>

    </header>

  )

}

export default Header