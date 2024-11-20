"use client";
import React from "react";
import Image from 'next/image'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import logo from "@/public/assets/logo.png";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaFolder } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About",
    "Projects",
    "Contacts",
    
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="border py-5 fixed bg-white shadow-md">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
        <Image
            src={logo}
            alt="Picture of the author"
            width={80}
            height={80}
            className="cursor-pointer hover:border-2 border-green-800"
        />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className='hover:text-green-800 hover:border-b-2 border-green-800 flex items-center gap-1 text-xl'>
          <IoInformationCircleSharp />About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className='hover:text-green-800 hover:border-b-2 border-green-800 flex items-center gap-1 text-xl'>
          <FaFolder />Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className='hover:text-green-800 hover:border-b-2 border-green-800 flex items-center gap-1 text-xl'>
          <RiContactsBook2Fill />Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="mt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
