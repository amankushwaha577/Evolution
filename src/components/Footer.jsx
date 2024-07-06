"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[40px] bg-black flex items-center justify-between text-white px-5 z-50">
      <div className="flex items-center">
        <h1 className="text-sm font-bold text-gray-300">EvolutionNova</h1>
        <p className="ml-2 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Aman Kushwaha. All rights reserved.
        </p>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition duration-300"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 transition duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-500 transition duration-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-800 transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
