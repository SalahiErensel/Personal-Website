import React from 'react'

import './about.css'

import {BsFillAwardFill} from 'react-icons/bs'

import {GiFullFolder} from 'react-icons/gi'

import {IoSchoolSharp} from 'react-icons/io5'

const About = () => {

  return (

    <section id="about">

    <h2>
      
      <b>

        <i>
          
          Personal Information
          
        </i>
          
      </b>
      
      </h2> 

      <div className='container about__container'> 

        <div className='about__me'>

        </div>

        <div className="about__content">

          <div className="about__cards">

            <article className='about__card'>

             <BsFillAwardFill className='about__icon'/>

            <h5>Experience</h5>
            
            <small> 4+ years of developing software projects and 1+ years work experience </small>

          </article>

          <article className='about__card'>

            <GiFullFolder className='about__icon'/>

            <h5>Projects</h5>

            <small> 20+ Projects completed and still working on many projects </small>

          </article>

          <article className='about__card'>

            <IoSchoolSharp className='about__icon'/>

            <h5>Education</h5>

            <small> BSc Software Engineering -- Eastern Mediterranean University  </small>

          </article>

        </div>

        <p>

          <b>

        I am Salahi Erensel.  I was born in Kyrenia, North Cyprus, on August 7, 2001. I pursued my A Level/
        
        Science high school education at 19 Mayis TMK in Kyrenia and my BSc in Software Engineering at Eastern Mediterranean 
        
        University in Famagusta. Turkish and English are the two languages I can speak. By clicking the icon at the top of the page, you may 
        
        obtain my CV and learn more about me.

        </b>
        
        </p>

      </div>

      </div>
 
      </section>

  )

}

export default About