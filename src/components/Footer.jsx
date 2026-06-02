import React from 'react'

const Footer = () => {
  return (
    <footer
        className="w-full h-[800px] p-11 relative" 
        style={{
            backgroundImage: "url('/assets/footer_1.png')",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            imageRendering: "pixelated",
        }}
    >
        <div className="max-w-xl mx-auto mt-10 p-4 border-8 border-orange-500 bg-white text-black rounded-sm shadow-lg 
            font-mono text-sm leading-relaxed tracking-tight"
            style={{ imageRendering: 'pixelated' }}
        >
            <p className="relative z-10 text-2xl">
            You've reached the end, brave explorer… but the journey's just beginning! <br />
            Let's deploy dreams and build something epic together.
            </p>
        </div>
        <div className='absolute bottom-10 left-10 py-2 px-6 text-white bg-black/80 backdrop-blur-sm rounded-sm border-4 border-gray-500' style={{ imageRendering: 'pixelated' }}>
          <p className='text-2xl'>Made with  ❤️  by Huzaifa Qureshi</p>
        </div>
    </footer>
  )
}

export default Footer