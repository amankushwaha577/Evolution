"use client";
import React from "react";
import bannerImage from "../../assets/home.gif";
import Image from "next/image";
const BannerSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4">
    <div className="container mx-auto flex items-center justify-around py-5">
      <div className="mr-4">
        <Image
          src={bannerImage}
          alt="Banner"
          className="w-80 h-80 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-pink-400 tracking-wider">
          Welcome to <span className="text-pink-300">EvolutionNova</span>
        </h1>
        <p className="text-xl mb-8">Organize Your Daily Diary With Our Application.</p>
        <button
          className="bg-white text-purple-500 px-6 py-3 mt-4 rounded-full shadow-md hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300"
          onClick={() => {
            // Add your action button click event handler logic here
            console.log("Action button clicked!");
          }}
        >
          Discover More
        </button>
      </div>
    </div>
  </div>
  );
};

export default BannerSection;
