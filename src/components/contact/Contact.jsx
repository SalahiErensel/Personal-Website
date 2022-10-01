import React from 'react'

import './contact.css'

import {MdEmail} from 'react-icons/md'

import {BsMessenger} from 'react-icons/bs'

import {RiWhatsappFill} from 'react-icons/ri'

import  { useRef } from 'react';

import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => 
  
  {

  
    e.preventDefault();

    emailjs.sendForm('service_xzkkbdh', 'template_fce13sa', form.current, 'GXABQmy8JZKf2Hc_f')

      .then((result) => 
      
      {

          console.log(result.text);

      }, 
      
      (error) => 
      
      {

          console.log(error.text);

      });

      e.target.reset();

  };

  return (

    <section id="contact">
      
      <h2>Contact</h2>

      <div className="container contact__container">

        <div className="contact__options">

          <article className="contact__option">

            <MdEmail className='contact__option-icon'/>

            <h4>Email</h4>
            
            <a href = "mailto:salahierensel01@gmail.com" target="_blank">Send a message</a>

          </article>

          <article className="contact__option">

            <BsMessenger className='contact__option-icon'/>

            <h4>Messenger</h4> 
            
            <a href = "https://m.me/salahierensel07" target="_blank">Send a message</a>

          </article>

          <article className="contact__option">

            <RiWhatsappFill className='contact__option-icon'/>

            <h4>Whatsapp</h4>
            
            <a href = "https://api.whatsapp.com/send?phone=905338300104" target="_blank">Send a message</a>

          </article>
  
        </div>

        <form ref={form} onSubmit ={sendEmail}>

          <input type="text" name='name' placeholder = "Your Full Name" required/>

          <input type="text" name ='email' placeholder = "Your Email" required/>

          <textarea name="message"  rows="7" placeholder = "Your Message" required></textarea>

          <button type = "submit" className="btn btn-primary">Send Message</button>

        </form>

      </div>
      
    </section>

  )
  
}

export default Contact