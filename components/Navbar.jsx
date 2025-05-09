// components/Navbar.tsx
"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Image 
                    src="/logo-black.png"
                    alt="robot lady"
                    width={70}
                    height={70}
                  />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#roadmap">RoadMap</Link>
            </li>
            <li>
              <Link href="#links">Links</Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}
