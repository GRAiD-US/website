"use client"
import { useState } from 'react';

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="rounded border-white-300 bg-white-200  flexBetween max-container padding-container relative z-300 py-5">
      <Link href="/">
        <Image src="/GRAiD.png" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <button onClick={handleClick}
        className={
          `lg:hidden bg-steel-500 block transition-all duration-300 ease-out 
          h-3 w-50 rounded-sm ${isOpen ?
            '-translate-y-3' : 'translate-y-1 '
          }`}>
        <Image
          className={'translate-x-20'}
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
        />
        <div style={{ padding: 5 }}>
        </div>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className={
            `translate-x-7 regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${isOpen ?
              'opacity-0' : 'opacity-100'
            }`} >
            {link.label}
          </Link>
        ))}
      </button>


    </nav>
  )
}

export default Navbar