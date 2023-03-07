import React from 'react'
import NavBarBlog from '../components/NavBarBlog/NavBarBlog'

const Error = () => {
  return (
    <>
      <NavBarBlog/>
      <h1 className='uppercase font-bold text-4xl tracking-wide nb-5 md:text-6xl flex items-center justify-center h-screen'>
        Error 404 | Page not found
      </h1>
    </>
  )
}

export default Error