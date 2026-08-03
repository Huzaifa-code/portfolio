import React from 'react'
import { NavBarBlog, BlogFooter } from '../components/Blog'
import Intro from '../components/Connect/Intro'
import { UserProvider } from '../context/userContext'
import Features from '../components/Connect/Features'

const Connect = () => {
  return (
    <div className="min-h-screen bg-[#f3f0e8] dark:bg-neutral-900 text-black dark:text-[#EBD3F8] font-sans selection:bg-yellow-400 selection:text-black">
        <NavBarBlog/>
        <Intro/>
        <Features/>
        <BlogFooter/>
    </div>
  )
}

const ConnectWrapper = () => (
  <UserProvider>
    <Connect />
  </UserProvider>
)

export default ConnectWrapper