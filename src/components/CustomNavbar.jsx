"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import logo from "../assets/logo.png";

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
    <nav className="h-16 py-2 px-8 md:px-36 flex justify-between items-center bg-black text-white shadow-md">
      <div className="brand flex items-center">
        <Image
          src={logo}
          alt="Logo"
          width={120} // Adjust width as needed
          height={40} // Adjust height as needed
        />
      </div>
      <div>
        <ul className="flex space-x-5 text-sm md:text-base">
          {context.user && (
            <>
              <li>
                <Link href="/" className="hover:text-blue-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/add-task" className="hover:text-blue-400 transition duration-300">
                  Write Notes
                </Link>
              </li>
              <li>
                <Link href="/show-tasks" className="hover:text-blue-400 transition duration-300">
                  Show Notes
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3 text-sm md:text-base">
          {context.user && (
            <>
              <li>
                <Link href="#!" className="hover:text-blue-400 transition duration-300">
                  {context.user.name}
                </Link>
              </li>
              <li>
                <button
                  onClick={doLogout}
                  className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-500 transition duration-300"
                >
                  Logout
                </button>
              </li>
            </>
          )}
          {!context.user && (
            <>
              <li>
                <Link href="/login" className="hover:text-blue-400 transition duration-300">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-blue-400 transition duration-300">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
