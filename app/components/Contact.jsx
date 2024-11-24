"use client";

import React, { useRef } from 'react';
import { Input } from "@nextui-org/react";
import Form from 'next/form'
import {Textarea} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import "aos/dist/aos.css";

function Contact() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();


  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Validate that all fields are filled
    if (
      !firstNameRef.current.value ||
      !lastNameRef.current.value ||
      !emailRef.current.value ||
      !subjectRef.current.value ||
      !messageRef.current.value
    ) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all fields.",
        icon: "error"
      });
      return; // Stop the function execution if validation fails
    }

    const bodyMessage = `Full Name: ${firstNameRef.current.value} ${lastNameRef.current.value} <br> Email: ${emailRef.current.value} <br> Message: ${messageRef.current.value}`;
    
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "ralphlaurencerazonable@gmail.com",
      Password: "FDF49797F8E77211DC35C6A02700D12BF296",
      To: 'ralphlaurencerazonable@gmail.com',
      From: "ralphlaurencerazonable@gmail.com",
      Subject: subjectRef.current.value,
      Body: bodyMessage
    })
    .then((message) => {
      if (message == "OK"){
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      }
      // Clear input fields
      firstNameRef.current.value = '';
      lastNameRef.current.value = '';
      emailRef.current.value = '';
      subjectRef.current.value = '';
      messageRef.current.value = '';
    })
    .catch((error) => console.error("Error sending email:", error));
  };
  
  return (
    
    <div className="mt-20 w-100px"  id='contact'>

      <div data-aos="fade-up" className="contact-me">

        <div className='contact-text'>
            <p className='text-3xl text-center'>Contact</p>

            <p className='text-lr text-center font-light mt-3'>If you want to know more about me, please contact me below.</p>
        </div>

        <Form  action='#' className='mt-5 rounded-md p-5 w-full max-w-lg mx-auto text-center'>
            <div className="flex flex-wrap justify-center gap-4">
                
                <div className="w-full max-w-xs">
                    <Input type="text" label="First Name" />
                </div>

                <div className="w-full max-w-xs">
                    <Input type="text" label="Last Name" />
                </div>

                <div className="w-full max-w-xs">
                    <Input type="email" label="Email" autocomplete="email"/>
                </div>

                <div className="w-full max-w-xs">
                    <Input type="text" label="Subject" />
                </div>

                <div className="w-full max-w-xs">
                    <Textarea label="Message" placeholder="Enter your message" />
                </div>

                <Button type="submit" className="bg-green-700 hover:bg-green-800 text-white w-full max-w-xs mt-4">
                Submit
                </Button>
            </div>
        </Form>

      </div>
      
    </div>
    
    
  )
}



export default Contact
