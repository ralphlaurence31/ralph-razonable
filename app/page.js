import React from 'react'
import Home from "@/app/home/Home.jsx"
import About from "@/app/about/About.jsx"

const page = () => {
  return (
    <div className='text-center py-20 mx-20'>
      <Home/>
      <About/>
    </div>
  )
}

export default page
