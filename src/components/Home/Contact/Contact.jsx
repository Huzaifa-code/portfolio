import React, { useRef } from 'react'
import send from './assets/send.svg'
import {SiGmail} from 'react-icons/si'
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

import { motion, useInView } from "framer-motion"


const SERVICE_ID = "service_xplr8kj";
const TEMPLATE_ID = "template_vyfnlyo";
const USER_ID = "10iw0d_F84yZ5EDl3";

function Contact() {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    e.target.reset()
  };


  // Framer Animation
  const left = useRef(null);
  const isInView = useInView(left); // same isInView for left and right element 
 

  return (
    <div id='contact' className='mt-[8rem]'>

      <div className='flex flex-col md:flex-row justify-between items-center my-9 mx-auto max-w-7xl'>
        
        <motion.div 
          style={{ transform: isInView ? "none" : "translateX(-200px)", opacity: isInView ? 1 : 0,transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s" }} 
          ref={left}
        >
          <div className='md:mr-36'>
            <h1 className='text-5xl text-center md:text-left md:text-6xl font-bold'>That's it! </h1>
            <h1 className='text-5xl text-center md:text-left md:text-6xl font-bold'>Now it's your   </h1>
            <h1 className='text-5xl text-center md:text-left md:text-6xl font-bold'>turn to say hi. </h1>
            <p className='text-xl text-center md:text-left my-3 text-[#464646]'>I hope to hear from you!</p>
            <p className='text-xl mt-9 text-center md:text-left'>Reach out to me at :</p>
            <p className='text-xl text-center md:text-left'>developerhuzaifa@gmail.com</p>
            <a className='my-5 py-3  md:w-[35%]  flex items-center justify-center bg-[#731FFC] font-semibold text-xl text-white rounded-md hover:scale-105' href="mailto:developerhuzaifa@gmail.com"> Email me <SiGmail className='ml-2' /> </a>        
          </div>
        </motion.div>

        <motion.div 
          style={{ transform: isInView ? "none" : "translateX(200px)", opacity: isInView ? 1 : 0,transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s" }} 
          ref={left}
        >
        {/* Contact form */}
          <form className='md:mt-0 mt-11'  onSubmit={handleOnSubmit} >
            <label className='text-2xl font-bold block' htmlFor="name" >Name : </label>
            <input required id='name' name='user_name' className='border-solid border border-[#5f5f5f] px-2 py-1 mb-5 outline-none w-full' type="text" />
            
            <label className='text-2xl font-bold block' htmlFor="email" >Email : </label>
            <input id='email' name='user_email' required className='border-solid border border-[#5f5f5f] px-2 py-1 mb-5 outline-none w-full' type="email" />

            <label className='text-2xl font-bold block' htmlFor="message" >Message : </label>
            <textarea required className='border-solid border border-[#5f5f5f] px-2 py-1 outline-none' name="user_message" id="message" cols="30" rows="5"></textarea>
            <button className='bg-[#F6C821] flex items-center justify-center text-xl font-bold rounded-md text-white mt-4 py-2 px-4 hover:scale-110' type="submit">SEND <img className='inline ml-3' src={send} alt="" /></button>
          </form>
        </motion.div>

      </div> 

      <footer >
        <p className='text-center my-2 text-[#464646] font-medium'>Made with  ❤️  by Huzaifa Qureshi</p>
      </footer>
    </div>
  )
}

export default Contact