import React from 'react';
import send from './assets/send.svg';
import { SiGmail } from 'react-icons/si';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import BlogFooter from '../../Blog/BlogFooter';
import MangaText from '../../Blog/MangaText';

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
        });
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      });
    e.target.reset();
  };

  return (
    <div id='contact' className='pt-16 font-sans'>
      
      {/* Title */}
      <div className="text-center mb-10 px-4">
        <div className="mb-2">
          <MangaText text="「連絡」" translation="Renraku (Contact &amp; Say Hello)" className="text-xl md:text-2xl text-red-600 dark:text-yellow-400 font-extrabold tracking-wider" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-white tracking-tight">
          Say Hello 👋
        </h2>
      </div>

      {/* Main Form Bento Card */}
      <div className='max-w-6xl mx-auto px-4 mb-16'>
        <div className="relative bg-white dark:bg-[#1E112C] brutalist-border brutalist-shadow p-6 md:p-12 overflow-hidden">
          <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

          <div className="absolute top-0 left-0 bg-black text-white dark:bg-[#EBD3F8] dark:text-black px-3 py-1 font-mono text-xs uppercase tracking-widest border-r-4 border-b-4 border-black dark:border-black z-20 font-bold">
            SECTION. 07 / CONTACT
          </div>

          <div className='grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10 pt-4'>
            
            {/* Left Column - Contact Info */}
            <div className='md:col-span-6 flex flex-col justify-between'>
              <div>
                <h3 className='text-3xl md:text-5xl font-black uppercase text-black dark:text-white leading-tight'>
                  That's it! <br /> Now it's your turn.
                </h3>
                <p className='text-base md:text-xl font-medium text-neutral-700 dark:text-neutral-300 mt-4 leading-relaxed'>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Reach out!
                </p>
              </div>

              <div className='mt-8 pt-6 border-t-2 border-dashed border-black dark:border-white/20'>
                <p className='text-xs font-mono font-bold uppercase text-gray-500 dark:text-gray-400'>
                  DIRECT EMAIL:
                </p>
                <p className='text-lg font-bold font-mono text-black dark:text-yellow-400 my-1'>
                  developerhuzaifa@gmail.com
                </p>

                <a 
                  className='mt-4 inline-flex items-center gap-2 py-3 px-6 bg-yellow-400 text-black font-extrabold uppercase text-sm brutalist-border brutalist-shadow-sm hover:bg-yellow-300 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer' 
                  href="mailto:developerhuzaifa@gmail.com"
                >
                  Email Me Direct <SiGmail className='text-lg ml-1' />
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className='md:col-span-6'>
              <form className='flex flex-col gap-4' onSubmit={handleOnSubmit}>
                <div>
                  <label className='text-xs font-mono font-bold uppercase text-black dark:text-[#EBD3F8] mb-1 block' htmlFor="name">
                    Your Name *
                  </label>
                  <input 
                    required 
                    id='name' 
                    name='user_name' 
                    placeholder="E.G. JOHN DOE"
                    className='w-full bg-white dark:bg-[#2E073F] text-black dark:text-[#EBD3F8] brutalist-border p-3 text-sm font-mono outline-none focus:bg-yellow-50 dark:focus:bg-[#3D0C54] transition-all' 
                    type="text" 
                  />
                </div>

                <div>
                  <label className='text-xs font-mono font-bold uppercase text-black dark:text-[#EBD3F8] mb-1 block' htmlFor="email">
                    Your Email *
                  </label>
                  <input 
                    id='email' 
                    name='user_email' 
                    required 
                    placeholder="JOHN@EXAMPLE.COM"
                    className='w-full bg-white dark:bg-[#2E073F] text-black dark:text-[#EBD3F8] brutalist-border p-3 text-sm font-mono outline-none focus:bg-yellow-50 dark:focus:bg-[#3D0C54] transition-all' 
                    type="email" 
                  />
                </div>

                <div>
                  <label className='text-xs font-mono font-bold uppercase text-black dark:text-[#EBD3F8] mb-1 block' htmlFor="message">
                    Your Message *
                  </label>
                  <textarea 
                    required 
                    className='w-full bg-white dark:bg-[#2E073F] text-black dark:text-[#EBD3F8] brutalist-border p-3 text-sm font-mono outline-none focus:bg-yellow-50 dark:focus:bg-[#3D0C54] transition-all' 
                    name="user_message" 
                    id="message" 
                    rows="4"
                    placeholder="TELL ME ABOUT YOUR PROJECT..."
                  ></textarea>
                </div>

                <button 
                  className='py-3.5 px-6 bg-yellow-400 hover:bg-yellow-300 text-black font-black uppercase text-base tracking-wider brutalist-border brutalist-shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2' 
                  type="submit"
                >
                  Send Message <img className='h-5' src={send.src || send} alt="" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <BlogFooter />
    </div>
  );
}

export default Contact;