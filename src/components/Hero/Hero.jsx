import React from 'react'
import styled from 'styled-components'
import img1 from './assets/select1.png'
import img2 from './assets/magic-wand1.png'
import img3 from './assets/palette1.png'
import uiux from './assets/uiux.svg'
import insta from './assets/Instagram.svg'
import lin from './assets/Linkedin.svg'
import gh from './assets/Github.svg'
import profileimg from './assets/profile.svg' 
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Herosec = styled.div`
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 700px){
    height: 60vh;
  }


  .main {
    display: flex;
    flex-direction: row;
   
    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;


const SocialBtn = styled.a`
    text-decoration: none;
`;


function Hero() {

  return (
    <div className='flex'>

        <div className='w-full'>
            <h1 className='text-center  font-bold text-3xl md:text-4xl md:mt-5' data-aos="fade-left" data-aos-duration="1000" >
              
              <img className='ml-[30%]' src={img1} alt="" />

              WEB DEVELOPER  

                <img className='ml-[70%]' src={img2} alt="" />
            </h1>
          
            <Herosec className=''>
              <div className='main'>
                <div className="text flex flex-col items-center">
                  <h1 className='text-center font-semibold text-3xl md:text-4xl' data-aos="fade-up" data-aos-duration="1000" >Hi , I am</h1>
                  <h1 className='text-center font-bold text-4xl md:text-5xl md:mt-2' data-aos="fade-up" data-aos-duration="1000" >Huzaifa Qureshi</h1> 
                  <a className='my-5 py-3 md:w-[40%] w-[50%] flex items-center justify-center bg-[#731FFC] font-semibold text-xl text-white rounded-md hover:scale-105' href="#contact">Hire Me <img className='ml-4' src={profileimg} alt="" /> </a>         
                </div>
              </div> 
            </Herosec>
            <img className='md:ml-[10%]' src={img3} alt="" />
            <img className='md:ml-4 h-7 md:h-11 md:mt-4' src={uiux} alt="" />      
        </div>
      
        <div className='fixed bg-[#fff] md:bg-transparent left-[83vw] md:left-auto md:right-10 mt-[10vh] md:mt-[26vh] pl-3'>
          <SocialBtn className='' target="_blank" href="https://www.instagram.com/dev_huzaifa"> <div className='p-3 my-3 rounded-full border border-solid border-black hover:rounded-xl '> <img className=''  src={insta} alt="" /></div> </SocialBtn>
          <SocialBtn className='' target="_blank" href="https://www.linkedin.com/in/huzaifa-qureshi-174173179"> <div className='p-3 rounded-full border border-solid border-black hover:rounded-xl'><img src={lin} alt="" /></div>  </SocialBtn>
          <SocialBtn className='' target="_blank" href="https://github.com/Huzaifa-code"> <div className='p-3 my-3 rounded-full border border-solid border-black hover:rounded-xl'><img src={gh} alt="" /></div>  </SocialBtn>
        </div>
    </div>
  )

  
}

export default Hero