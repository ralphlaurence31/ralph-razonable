"use client";

import React, { useState } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import "aos/dist/aos.css";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Validate that all fields are filled
    if (!firstName || !lastName || !email || !subject || !message) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all fields.",
        icon: "error",
      });
      return; // Stop the function execution if validation fails
    }

    const bodyMessage = `Full Name: ${firstName} ${lastName} <br> Email: ${email} <br> Message: ${message}`;

    emailjs
      .send(
        "service_0ov9zlj", // EmailJS service ID
        "template_ekqumle", // EmailJS template ID
        {
          from_name: `${firstName} ${lastName}`,
          from_email: email,
          subject: subject,
          message: bodyMessage,
        },
        "XgzLS3rP4qaOGPsTJ" // Your EmailJS user ID
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
          });

          // Clear input fields after successful message
          setFirstName("");
          setLastName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          // Log the error object to inspect the issue
          console.error("Error sending email:", error);

          Swal.fire({
            title: "Error!",
            text: `Failed to send message: ${error.text}`,
            icon: "error",
          });
        }
      );
  };

  return (
    <div className="mt-20 w-100px" id="contact">
      <div data-aos="fade-up" className="contact-me">
        <div className="contact-text">
          <p className="text-3xl text-center">Contact</p>
          <p className="text-lr text-center font-light mt-3">
            If you want to know more about me, please contact me below.
          </p>
        </div>

        <form
          onSubmit={sendEmail}
          className="mt-5 rounded-md p-5 w-full max-w-lg mx-auto text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-full max-w-xs">
              <Input
                type="text"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="w-full max-w-xs">
              <Input
                type="text"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="w-full max-w-xs">
              <Input
                type="email"
                label="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="w-full max-w-xs">
              <Input
                type="text"
                label="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="w-full max-w-xs">
              <Textarea
                label="Message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white w-full max-w-xs mt-4"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
