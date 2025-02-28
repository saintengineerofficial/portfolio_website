'use client'
import { useState } from "react";
import { twMerge } from "tailwind-merge";


const navs = [
  { herf: '/', title: 'Home' },
  { herf: '#projects', title: 'Projects' },
  { herf: '#about', title: 'About' },
  { herf: '#contact', title: 'Contact' },
]

export const Header = () => {
  const [herf, setHerf] = useState('/')

  return <div className="flex items-center justify-center fixed z-10 top-3 w-full">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur relative">
      {navs.map(nav => (
        <a key={nav.herf} href={nav.herf} className={twMerge('nav-item', herf === nav.herf && 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900')} onClick={() => setHerf(nav.herf)}>{nav.title}</a>
      ))}

    </nav>
  </div>;
};