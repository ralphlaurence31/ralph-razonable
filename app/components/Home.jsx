"use client";
import React from 'react'
import Image from 'next/image'
import avatar from "@/public/assets/avatar.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {Button} from "@nextui-org/react";
import 'aos/dist/aos.css';

const page = () => {

  return (
    <div data-aos="fade-right" className='about-me md:grid-cols-2 grid grid-cols-1 grid' id='home'>

        <div className="about-me-contents flex justify-center items-center">
           <div className='flex  justify-center items-center flex-col'>
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

              <Button className='btn mt-5 w-[115px] w-auto bg-green-700 hover:bg-green-800 text-white flex items-center gap-1'>
                <a href="https://drive.google.com/file/d/1gePfcyRtOIrWHjuUBjbMFWOlmqp5at-N/view?usp=sharing" target='_blank'>View Resume</a>
              </Button>
             
           </div>
        </div>

        <div className="my-avatar flex md:mt-1 mt-5 items-center justify-center">
            <Image
            src={avatar}
            alt="Picture of the author"
            width={400}
            height={390} 
            className="border-8 border-green-800 rounded-full"
            />
        </div>
      
    </div>
  )
}

export default page
