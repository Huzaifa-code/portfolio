import React from 'react'
import send from './assets/send.svg'
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';


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

  return (
    <div id='contact' className='mt-[8rem]'>

      <div className='flex flex-col md:flex-row justify-center items-center my-9'>
        <div className='md:mr-36'>
          <h1 className='text-5xl text-center md:text-left md:text-6xl font-bold'>That's it! </h1>
          <h1 className='text-5xl text-center md:text-left md:text-6xl font-bold'>Now it's your   </h1>
          <h1 className='text-5xl text-center md:text-left md:text-6xl font-bold'>turn to say hi. </h1>
          <p className='text-xl text-center md:text-left my-3 text-[#464646]'>I hope to hear from you!</p>
          <p className='text-xl mt-9 text-center md:text-left'>You can also email me at :</p>
          <p className='text-xl text-center md:text-left'>developerhuzaifa@gmail.com</p>
        </div>

        {/* Contact form */}
        <form className='md:mt-0 mt-11'  onSubmit={handleOnSubmit} >
          <label className='text-2xl font-bold block' htmlFor="name" >Name : </label>
          <input id='name' name='user_name' className='border-solid border border-[#5f5f5f] px-2 py-1 mb-5 outline-none w-full' type="text" />
          
          <label className='text-2xl font-bold block' htmlFor="email" >Email : </label>
          <input id='email' name='user_email' required className='border-solid border border-[#5f5f5f] px-2 py-1 mb-5 outline-none w-full' type="email" />

          <label className='text-2xl font-bold block' htmlFor="message" >Message : </label>
          <textarea className='border-solid border border-[#5f5f5f] px-2 py-1 outline-none' name="user_message" id="message" cols="30" rows="5"></textarea>
          <button className='bg-[#F6C821] flex items-center justify-center text-xl font-bold rounded-md text-white mt-4 py-2 px-4 hover:scale-110' type="submit">SEND <img className='inline ml-3' src={send} alt="" /></button>
        </form>

      </div> 

      <footer >
        <p className='text-center my-2 text-[#464646]'>Made with  ❤️  by Huzaifa Qureshi</p>
      </footer>
    </div>
  )
}

export default Contact