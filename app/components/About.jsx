"use client";

import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import {Tooltip} from "@nextui-org/react";
import Image from 'next/image'
import htmlIcon from "@/public/assets/html.png";
import cssIcon from '@/public/assets/css.png';
import bootstrapIcon from '@/public/assets/bootstrap.png';
import tailwindIcon from '@/public/assets/tailwind.png';
import phpIcon from '@/public/assets/php.png';
import mysqlIcon from '@/public/assets/mysql.png';
import javaIcon from '@/public/assets/java.png';
import javascriptIcon from '@/public/assets/javascript.png';
import reactIcon from '@/public/assets/react.png';

const technologies = [
    { icon: htmlIcon, pointer: 'HTML5' },
    { icon: cssIcon, pointer: 'CSS' },
    { icon: bootstrapIcon, pointer: 'Bootstrap' },
    { icon: tailwindIcon, pointer: 'Tailwind' },
    { icon: phpIcon, pointer: 'PHP' },
    { icon: mysqlIcon, pointer: 'MySQL' },
    { icon: javaIcon, pointer: 'Java' },
    { icon: javascriptIcon, pointer: 'JavaScript' },
    { icon: reactIcon, pointer: 'React' },
  ];

  function About() {

    useEffect(() => {
        AOS.init({duration:1200})
      }, []);

  return (
    <div className='about-me mt-20' id='about-me'>

      <div className='aboutt' data-aos="fade-down">
        <p className='text-3xl text-center'>About</p>
      </div>

      <div className='aboutt' data-aos="fade-up">
        <p className='text-justify mt-5 p-5'>I am Ralph Laurence S. Razonable, 23 years old.
            I recently graduated from Cavite State University - Imus Campus with a Bachelor’s degree in Information Technology. 
           I completed my internship at South Imus Specialist Hospital. I am currently studying web technology tools to upskill 
           myself. </p>

          <p className='text-justify mt-5 p-5'>
          I am passionate, willing to enhance my skills, expand my knowledge and hardworking that give his all in all aspects of his job. 
          I am willing to try new things and take criticism. Seeking an opportunity in the IT industry.
          </p>
      
      </div>

      <div className='myTechnologies'>

            <div className='titleTechnologies mt-20' data-aos="fade-down">
                <p className='text-3xl text-center'>Technologies</p>
            </div>

            <div className='myTechnologies mt-5 flex flex-wrap justify-around gap-5 gap-y-[3rem] mx-10' data-aos="fade-up">
              {technologies.map((technologies, index) => (
                <ul key={index} className='relative inline-flex  gap-[50px] mt-5'>
                  <Tooltip content={technologies.pointer}>
                    <Image 
                    src={technologies.icon} 
                    alt={technologies.pointer} 
                    width={50} 
                    height={50} 
                    className='cursor-pointer transition-all duration-200 hover:-translate-y-1' 
                    />
                  </Tooltip>
                </ul>
                
              ))}
                    
            </div>
        </div>
    </div>
  )
}

export default About
