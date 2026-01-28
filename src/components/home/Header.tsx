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

  return (
    <div className='w-screen'>
      <div className="lg:px-20 pt-5 flex items-center justify-center lg:justify-end fixed z-10 top-3 w-full">
        <div className='flex flex-col items-center gap-4 text-white/80 font-medium lg:flex-row lg:justify-center'>
          <span>+86 18025252853</span>
          <span>saintengineerofficial@gmail.com</span>
        </div>
      </div>
    </div>
  )
};