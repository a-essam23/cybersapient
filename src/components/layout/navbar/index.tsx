"use client";
import Image from "next/image";
import { useState } from "react";
import NavbarBurger from "./navbar-burger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full py-[70px] px-[130px] absolute top-0 z-50 flex">
      <div className="flex justify-between w-full">
        <Image width={74} height={88} src={"/cred.svg"} alt="cred-logo" />
        <NavbarBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
    </nav>
  );
};

export default Navbar;
