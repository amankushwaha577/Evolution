"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[30px] bg-black flex items-center justify-between text-white px-5 z-50">
      <div className="flex items-center">
        <h1 className="text-xs font-bold">EvolutionNova</h1>
        <p className="ml-2 text-xs">
          &copy; {new Date().getFullYear()} Aman Kushwaha. All rights reserved.
        </p>
      </div>
      <div className="flex space-x-4"> {/* Increased space between icons */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <FaFacebook size={16} /> {/* Increased icon size */}
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <FaTwitter size={16} /> {/* Increased icon size */}
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <FaInstagram size={16} /> {/* Increased icon size */}
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <FaLinkedin size={16} /> {/* Increased icon size */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
