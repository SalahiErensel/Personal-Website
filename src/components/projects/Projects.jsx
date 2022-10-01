import React from 'react'

import './projects.css'

import Image1 from '../../assets/Parser.png'

import Image2 from '../../assets/Calculator.PNG'

import Image3 from '../../assets/TicTacToe.PNG'

import Image4 from '../../assets/CountdownTimer.PNG'

import Image5 from '../../assets/Blockchain.PNG'

import Image6 from '../../assets/Student.PNG'

const data = [

  {
    
    id: 1,

    image:Image1,

    title : 'Parser Application',

    github : 'https://github.com/SalahiErensel/Parser_Application'
  
  },

  {
    
    id: 2,

    image:Image2,

    title : 'Calculator',

    github : 'https://github.com/SalahiErensel/Calculator_2'
  
  },

  {
    
    id: 3,

    image:Image3,

    title : 'Tic Tac Toe Game',

    github : 'https://github.com/SalahiErensel/Tic_Tac_Toe_Game'
  
  },

  {
    
    id: 4,

    image:Image4,

    title : 'Count Down Timer',

    github : 'https://github.com/SalahiErensel/Countdown-Timer'
  
  },

  {
    
    id: 5,

    image:Image5,

    title : 'Crypto Transfer App with Blockchain',

    github : 'https://github.com/SalahiErensel/BlockChain_Transfer_App'
  
  },


  {
    
    id: 6,

    image:Image6,

    title : 'Student Information System',

    github : 'https://github.com/SalahiErensel/Featured_Student_Information_Program'
  
  },

]

const Projects = () => {

  return (

    <section id = "projects">
      
      <h2>Completed Projects</h2>

      <div className="container project__container">

        {

          data.map(({id,image,title,github}) => {

            return (

              <article key = {id} className='project__item'>

            <div className="project__item-image">

              <img src= {image} alt = {title} />

            </div>

              <h3>{title}</h3>

              <div className='project__item-button'>

                <a href={github} className='btn btn-primary' target='_blank'>GitHub</a>

              </div>

        </article>

            )

          }
          
          )

        }

      </div>
      
    </section>

  )

}

export default Projects