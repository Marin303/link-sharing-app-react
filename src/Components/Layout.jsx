import React from 'react'
import Nav from './Nav'
import Content from './Content'
const Layout = () => {
  return (
    <div className='bg-blue-200 text-center h-screen'>
        <Nav/>
        <Content/>
    </div>
  )
}

export default Layout