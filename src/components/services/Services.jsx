import React from 'react'

import './services.css'

import {TiTick} from 'react-icons/ti'

const Services = () => {

  return (

    <section id="services">
      
      <h2>Services</h2>

      <div className="container services__container">

        <article className='service'>

          <div className="service__head">

            <h3>
              
              <b>User Interface Design</b>
              
            </h3>

          </div>

          <ul className='service__list'>

            <li>

              <TiTick className='service__list-icon'/>

              <p>
                
                <b>User Interface design made with Figma.</b>
                
              </p>

            </li>

            <li>

              <TiTick className='service__list-icon'/>

              <p>
                
                <b>User friendly design which is easy to use and looks simple.</b>
                
              </p>

            </li>

            <li>

              <TiTick className='service__list-icon'/>

              <p>
                
                <b>Sample design templates are shown to client and then designed.</b>
                
              </p>

            </li>

            <li>

              <TiTick className='service__list-icon'/>

              <p>
                
                <b>Any further changes can be made after the design is completed.</b>
                
              </p>

            </li>

          </ul>

        </article>

        <article className='service'>

          <div className="service__head">

            <h3>
              
              <b>Web Development</b>
              
            </h3>

          </div>

          <ul className='service__list'>

            <li>

              <TiTick className='service__list-icon'/>

              <p>
                
               <b> Web development at the request of the customer.</b>
                
              </p>

            </li>

            <li>

              <TiTick className='service__list-icon'/>

              <p>
                
                <b>Personal websites with any wanted design or functionality.</b>
                
              </p>

            </li>

             <li>

              <TiTick className='service__list-icon'/>

              <p>
                
                <b>Any Web Application connected to a database.</b>
                
              </p>

            </li>

            <li>

              <TiTick className='service__list-icon'/>

              <p>
                
                <b>All software documentation can be done according to the project needed.</b>
                
              </p>

            </li>

          </ul>

        </article>

      </div>
      
    </section>

  )

}

export default Services