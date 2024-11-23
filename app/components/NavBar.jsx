"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import React from "react";
import Image from 'next/image'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import logo from "@/public/assets/logo.png";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaFolder } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [mounted, setMounted] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Projects",
    "Contacts",
    
  ];

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, []);

  if(!mounted) return null;


  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="py-5 fixed bg-white shadow-md dark:bg-gray-900">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
        <Link href="/">
          <Image
              src={logo}
              alt="Picture of the author"
              width={80}
              height={80}
              className="cursor-pointer hover:border-2 border-green-700"
          />
        </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className='hover:text-green-800 hover:border-b-2 border-green-800 flex items-center gap-1 text-xl dark:text-white dark:hover:text-green-700'>
          <IoInformationCircleSharp />About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className='hover:text-green-800 hover:border-b-2 border-green-800 flex items-center gap-1 text-xl dark:text-white dark:hover:text-green-700'>
          <FaFolder />Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className='hover:text-green-800 hover:border-b-2 border-green-800 flex items-center gap-1 text-xl dark:text-white dark:hover:text-green-700'>
          <RiContactsBook2Fill />Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={theme === 'dark'}
                onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-700"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-white">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
            </label>
          </div>
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
