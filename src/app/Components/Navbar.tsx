"use client";
import { Navbar,Button } from "flowbite-react";
import {FaReact} from 'react-icons/fa'
import {AiOutlineHome,AiOutlineTags,AiOutlineQuestionCircle,AiOutlineUser} from 'react-icons/ai'
const NavbarComponent = () => {
 return (
    <Navbar fluid className="sticky top-0 z-10" >
<Navbar.Brand>
    <FaReact className="text-3xl text-sky-500 animate-spin"/>
    <span className="px-2 text-slate-900 font-inter">Gaming <span className="font-bold">STARTX</span></span>
</Navbar.Brand>
<div className="flex md:order-2 gap-x-2">
    <Button color={"light"}>
      Inicia sesion
    </Button>
    <Navbar.Toggle />
  </div>
    <Navbar.Collapse>
        <Navbar.Link href="/" active className="text-base flex items-center gap-x-1">
            <AiOutlineHome className="text-lg"/>
            inicio
        </Navbar.Link>
        <Navbar.Link href="/" className="text-base flex items-center gap-x-1">
            <AiOutlineTags className="text-lg"/>
            product
        </Navbar.Link>
        <Navbar.Link href="/" className="text-base flex items-center gap-x-1">
            <AiOutlineQuestionCircle className="text-lg"/>
            services
        </Navbar.Link>
        <Navbar.Link href="/" className="text-base flex items-center gap-x-1">
            <AiOutlineUser className="text-lg"/>
            contact
        </Navbar.Link>
    </Navbar.Collapse>
    </Navbar>
 )
};

export default NavbarComponent;
