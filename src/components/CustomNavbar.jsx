"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import Image from 'next/image'; // Import the Image component

import logo from "../assets/logo.png"

const CustomNavbar = () => {
  const context = useContext(UserContext);
  const router = useRouter();

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Logout Error");
    }
  }

  return (

<nav className="h-16 py-2 px-36 flex justify-between items-center">
  <div className="brand flex items-center">
    {/* Add the brand logo image using Next.js's Image component */}
    <Image
      src={logo} // Replace with your actual image path
      alt="Logo"
      width={140} // Adjust width as needed
      height={20} // Adjust height as needed
    />

  </div>
  <div>
    <ul className="flex space-x-5">
      {context.user && (
        <>
          <li>
            <Link href={"/"} className="hover:text-blue-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/add-task" className="hover:text-blue-200">
              Write Notes
            </Link>
          </li>
          <li>
            <Link href={"/show-tasks"} className="hover:text-blue-200">
              Show Notes
            </Link>
          </li>
        </>
      )}
    </ul>
  </div>
  <div>
    <ul className="flex space-x-3">
      {context.user && (
        <>
          <li>
            <Link href={"#!"}>{context.user.name}</Link>
          </li>
          <li>
            <button onClick={doLogout}>Logout</button>
          </li>
        </>
      )}

      {!context.user && (
        <>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Signup</Link>
          </li>
        </>
      )}
    </ul>
  </div>
</nav>


  );
};

export default CustomNavbar;
