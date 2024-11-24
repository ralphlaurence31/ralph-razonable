import React from 'react'
import Home from "@/app/components/Home.jsx"
import About from "@/app/components/About.jsx"
import Projects from "@/app/components/Projects.jsx"

const page = () => {
  return (
    <div className='text-center py-20 mx-20'>
      <Home/>
      <About/>
      <Projects/>
    </div>
  )
}

export default page
