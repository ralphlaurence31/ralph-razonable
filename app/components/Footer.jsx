import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "@/public/assets/logo.png"
import Image from 'next/image'

function Footer() {
  return (
    <div className='footer'>
        
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="md:flex md:items-center md:justify-between mx-auto max-w-screen-lg">
                    <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse justify-center">
                    <Image src={logo} alt='Logo' width={50} height={50}/>
                        <span class="self-center text-base font-light whitespace-nowrap dark:text-white">ralphlaurencerazonable@gmail.com</span>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 gap-10 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 justify-center">
                        <li className='text-3xl text-green-700 hover:text-green-800'><a href="https://www.facebook.com/HiImRaaalph" target='_blank'><FaFacebook /></a></li>
                        <li className='text-3xl text-green-700 hover:text-green-800'><a href="https://www.instagram.com/ralphlaurence31/?next=%2F" target='_blank'><FaInstagram /></a></li>
                        <li className='text-3xl text-green-700 hover:text-green-800'><a href="https://github.com/ralphlaurence31" target='_blank'><FaGithub /></a></li>
                        <li className='text-3xl text-green-700 hover:text-green-800'><a href="https://www.linkedin.com/in/ralph-laurence-razonable-b39622245/" target='_blank'><FaLinkedin /></a></li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400 ">© 2024 <a href="#home" class="hover:underline">RLSR™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    </div>
  )
}

export default Footer
