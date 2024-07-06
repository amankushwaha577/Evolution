"use client";
import React from "react";
import bannerImage from "../../assets/home.gif";
import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-around px-4">
        <div className="mr-4 relative">
          <Image
            src={bannerImage}
            alt="Banner"
            layout="responsive"
            width={300}
            height={200}
            className="rounded-full hover:scale-105 transform transition-transform duration-300"
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-pink-400 tracking-wider">
            Welcome to <span className="text-pink-300">EvolutionNova</span>
          </h1>
          <p className="text-lg mb-8">Organize Your Daily Diary With Our Application.</p>
          <button
            className="bg-white text-purple-500 px-6 py-3 mt-4 rounded-full hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            onClick={() => {
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
