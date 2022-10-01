import React from 'react'

import './skill.css'

import {TiTick} from 'react-icons/ti'

export const Skill = () => {

  return (

    <section id="skill">

        <h2>Programming Languages and Experiences</h2>

        <div className="container skill__container">

            <div className="skill__frontend">

              <h3>Frontend Development</h3>
              
              <div className="skill__content">

              <article className='skill__details'>

                <TiTick className='skill__details-icon'/>

                <div> 
                  
                  <h4>HTML</h4>

                  <small className='text-light'>Proficient</small>
                
                </div>     

              </article>

              <article className='skill__details'>

                <TiTick className='skill__details-icon'/>

                <div>

                  <h4>CSS</h4>

                  <small className='text-light'>Competent</small>
                  
                </div>     

              </article>

              <article className='skill__details'>

                <TiTick className='skill__details-icon'/>

                <div>

                  <h4>JavaScript</h4>

                  <small className='text-light'>Competent</small> 
                  
                </div>    

            </article>

            <article className='skill__details'>

                <TiTick className='skill__details-icon'/>

                <div>
                  
                  <h4>React JS</h4>

                  <small className='text-light'>Competent</small>
                  
                </div>     

            </article>

            <article className='skill__details'>

                <TiTick className='skill__details-icon'/>

                <div>

                  <h4>Bootstrap</h4>

                  <small className='text-light'>Competent</small>
                  
                </div>     

            </article>

            <article className='skill__details'>

              <TiTick className='skill__details-icon'/>

              <div>

                <h4>Figma</h4>

                <small className='text-light'>Proficient</small>
              
              </div>     

            </article>

            </div>

          </div>

            <div className="skill__backend">

              <h3>Backend Development</h3>
              
                <div className="skill__content">

                  <article className='skill__details'>

                    <TiTick className='skill__details-icon'/>

                    <div>
                      
                      <h4>PHP , Laravel</h4>

                      <small className='text-light'>Proficient</small>
                      
                    </div>     

                  </article>

                  <article className='skill__details'>

                    <TiTick className='skill__details-icon'/>

                    <div>
                      
                      <h4>Node JS</h4>

                      <small className='text-light'>Competent</small>
                      
                    </div>     

                  </article>

                  <article className='skill__details'>

                    <TiTick className='skill__details-icon'/>

                    <div>
                      
                      <h4>Python</h4>

                      <small className='text-light'>Competent</small>
                      
                    </div>     

                  </article>

                  <article className='skill__details'>

                    <TiTick className='skill__details-icon'/>

                    <div>

                      <h4>Java</h4>

                      <small className='text-light'>Competent</small>
                      
                    </div>     

                  </article>

                  <article className='skill__details'>

                    <TiTick className='skill__details-icon'/>

                    <div>

                      <h4>MySql</h4>

                      <small className='text-light'>Proficient</small>
                      
                    </div>     

                  </article>

                  <article className='skill__details'>

                    <TiTick className='skill__details-icon'/>

                    <div>

                      <h4>MongoDB</h4>

                      <small className='text-light'>Competent</small>
                      
                    </div>     

                  </article>

                </div>

            </div>

        </div>

      
      </section>

  )

}

export default Skill