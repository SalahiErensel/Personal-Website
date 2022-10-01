import React from 'react'

import CV from '../../assets/cv.pdf'

const Button = () => {

  return (

    <div className = 'button'>

        <a href = {CV} download className='btn btn-primary'> Download CV </a>

        <a href = "#contact" className='btn btn-primary'> Contact </a>

    </div>

  )

}

export default Button