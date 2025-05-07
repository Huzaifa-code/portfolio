import React from 'react'

const Footer = () => {
  return (
    <footer
        className="w-full h-[600px] p-11 relative" 
        style={{
            backgroundImage: "url('/assets/footer.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
        <p className='text-center absolute bottom-4 w-fit mx-auto text-2xl py-2 px-6 text-white bg-black/40 backdrop-blur-sm rounded-xl border border-gray-700'>Made with  ❤️  by Huzaifa Qureshi</p>
    </footer>
  )
}

export default Footer