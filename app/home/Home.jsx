import React from 'react'
import Image from 'next/image'
import avatar from "@/public/assets/avatar.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const page = () => {
  return (
    <div data-aos="zoom-in" className='about-me md:grid-cols-2 grid grid-cols-1 grid' id='home'>

        <div className="about-me-contents flex justify-center items-center">
           <div className='flex md:justify-start md:items-start justify-center items-center flex-col'>
              <p className='text-3xl'>Hello, it's me</p>
              <p className='text-6xl'>Ralph Razonable</p>
              <p className='text-3xl'>And I am a <span className='text-green-700'>Web Developer</span></p>
              <p className='text-lg mt-3 font-light'>aspiring full-stack web developer.</p>

              <ul className='flex items-center gap-10 mt-3'>
                  <li className='text-3xl text-green-700 hover:text-green-800'><a href="https://www.facebook.com/HiImRaaalph" target='_blank'><FaFacebook /></a></li>
                  <li className='text-3xl text-green-700 hover:text-green-800'><a href="https://www.instagram.com/ralphlaurence31/?next=%2F" target='_blank'><FaInstagram /></a></li>
                  <li className='text-3xl text-green-700 hover:text-green-800'><a href="https://github.com/ralphlaurence31" target='_blank'><FaGithub /></a></li>
                  <li className='text-3xl text-green-700 hover:text-green-800'><a href="https://www.linkedin.com/in/ralph-laurence-razonable-b39622245/" target='_blank'><FaLinkedin /></a></li>
              </ul>

              <button type='button' className='btn w-auto text-white text-center mt-5 w-[130px] bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 flex items-center gap-1'>
                View Resume
                </button>
           </div>
        </div>

        <div className="my-avatar flex md:justify-end items-center justify-center ">
            <Image
            src={avatar}
            alt="Avatar"
            width={250}
            height={250} 
            className="object-cover object-fit"
            />
        </div>
      
    </div>
  )
}

export default page
