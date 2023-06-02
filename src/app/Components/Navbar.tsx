"use client";
import { Navbar, Button, Badge } from "flowbite-react";
import { FaReact } from "react-icons/fa";
import { AiOutlineHome, AiOutlineTags } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";

const NavbarComponent = () => {
 return (
  <Navbar fluid className="sticky top-0 z-10 py-5">
   <Navbar.Brand>
    <FaReact className="text-3xl text-sky-500 animate-spin" />
    <span className="px-2 text-slate-900 font-inter">gaming STARTX</span>
    <Badge color="indigo" size="sm" className="lg:block hidden">
     Beta
    </Badge>
   </Navbar.Brand>
   <div className="flex md:order-2 gap-x-2">
    <Button color={"light"}>Inicia sesion</Button>

    <Navbar.Toggle />
   </div>
   <Navbar.Collapse>
    <Link
     href="/"
     className="text-lg text-gray-800 flex items-center gap-x-1 hover:text-sky-500 transition-all lg:py-0 py-5 lg:px-0 px-2 hover:bg-gray-200 lg:hover:bg-transparent md:hover:bg-transparent"
    >
     <AiOutlineHome className="text-lg" />
     inicio
    </Link>
    <Link
     href="#"
     className="text-lg text-gray-800 flex items-center gap-x-1 hover:text-sky-500 transition-all lg:py-0 py-5 lg:px-0 px-2 hover:bg-gray-200 lg:hover:bg-transparent md:hover:bg-transparent"
    >
     <BiCategory className="text-lg" />
     categorias
    </Link>
    <Link
     href="/products"
     className="text-lg text-gray-800 flex items-center gap-x-1 hover:text-sky-500 transition-all lg:py-0 py-5 lg:px-0 px-2 hover:bg-gray-200 lg:hover:bg-transparent md:hover:bg-transparent mb-16 md:mb-0 lg:mb-0"
    >
     <AiOutlineTags className="text-lg" />
     productos
    </Link>
   </Navbar.Collapse>
  </Navbar>
 );
};

export default NavbarComponent;
