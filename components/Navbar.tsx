// components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" }, // <-- LINK AGGIUNTO
    { href: "/resources", label: "Resources" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/users", label: "Users" },
  ];

  return (
    <nav className="relative z-20">
      <div className="flex items-center justify-between py-6">
        <Link href="/" className="text-2xl font-bold">MindeveLoop</Link>
        
        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8 text-sm font-bold">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="transition-colors duration-300 hover:text-emerald-400">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Pulsante Hamburger per Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Apri menu">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile a comparsa */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-lg rounded-lg shadow-lg">
          <div className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-lg font-bold transition-colors duration-300 hover:text-emerald-400" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
