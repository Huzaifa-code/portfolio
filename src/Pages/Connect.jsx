import React from 'react'
import {NavBarBlog} from '../components/Blog'
import Intro from '../components/Connect/Intro'
import { UserProvider } from '../context/userContext'
import Features from '../components/Connect/Features'

const Connect = () => {
  return (
    <div>
        <NavBarBlog/>
        <Intro/>
        <Features/>
    </div>
  )
}

const ConnectWrapper = () => (
  <UserProvider>
    <Connect />
  </UserProvider>
)

export default ConnectWrapper