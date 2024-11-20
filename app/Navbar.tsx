'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-5 uppercase overflow-hidden fixed top-0 min-w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex justify-left items-center space-x-6 ">
          <Image
            src="favicon.ico"
            alt="Arbaz Khan"
            width={40}
            height={40}
            className="rounded-full"
          />
          {/* Name on the left */}
          <Link href="/" className="text-1xl font-bold">
            Arbaz Khan
          </Link>
        </div>

        {/* Center-aligned navigation items */}
        <div className="hidden md:flex space-x-10 text-base font-semibold ">
          <Link href="#landing" className="hover:text-indigo-400">
            Home
          </Link>
          <Link href="#about" className="hover:text-indigo-400">
            About
          </Link>
          <Link href="#projects" className="hover:text-indigo-400">
            Projects
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-2">
          <Link href="#landing" className="hover:text-indigo-400">
            Home
          </Link>
          <Link href="#about" className="hover:text-indigo-400">
            About
          </Link>
          <Link href="#projects" className="hover:text-indigo-400">
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
}
