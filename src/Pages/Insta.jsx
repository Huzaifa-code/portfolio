import React from 'react'
import InstagramContent from '../components/Instagram/InstagramContent'
import { NavBarBlog } from '../components/Blog'
import { UserProvider } from '../context/userContext'

const Insta = () => {
  return (
    <div>
        <NavBarBlog/>
        <InstagramContent/>
    </div>
  )
}

const InstaWrapper = () => (
  <UserProvider>
    <Insta />
  </UserProvider>
)

export default InstaWrapper