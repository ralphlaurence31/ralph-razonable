"use client";
import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import 'aos/dist/aos.css';


// Sample data for the projects
const projects = [
  {
    imageUrl: "/assets/calculator.png",
    title: 'RLSR Scientific Calculator',
    description: 'This project used Tailwind CSS for UI and JavaScript for function.',
    link: 'https://scientific-calculator-brown.vercel.app/'
  },
  {
    imageUrl: "/assets/crud.png",
    title: 'myclassmates-crud',
    description: 'This project used Tailwind CSS for UI, PHP for backend.',
    link: 'https://github.com/ralphlaurence31/crud-myclassmates'
  }
   
];

function Projects() {
  
  return (
    <div className='transition-all duration-1200 titleTechnologies mt-20' id='my-projects' data-aos="fade-up">
      <p className='text-3xl text-center'>Projects</p>

      <div className='w-full gap-4 mt-10 grid md:grid-cols-4 grid-cols-1 p-5'>

        {projects.map((project, index) => (

            <Card key={index} className="max-w-[400px] dark:bg-gray-900">
              <CardHeader className="flex gap-3">
                <Link isExternal href={project.link}>
                  <Image src={project.imageUrl} alt={project.title} width='100%' height={150} className="rounded-t-lg border-gray-900" />
                </Link>
              </CardHeader>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                    {project.title}
                </h5>
              <Divider/>
              <CardBody>
                <p>{project.description}</p>
              </CardBody>
              <Divider/>
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href={projects.link}
                  className="cursor-pointer"
                >
                  Visit Link
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>

    </div>
  );
}

export default Projects;

