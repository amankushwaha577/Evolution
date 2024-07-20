"use client";
import React, { useState } from "react";
import signUpBanner from "../../assets/signup.gif";
import Image from "next/image";
import { toast } from "react-toastify";
import { signUp } from "@/services/userService";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1K1evWjMTfR3IMBxQxXSGV2pTaO2rAP7EzIMB4u0YwxfFL4pJ269eff6sNvuxtjI7c4s",
  });

  const doSignup = async (event) => {
    event.preventDefault();

    if (data.name.trim() === "" || data.name == null) {
      toast.warning("Name is required !!", {
        position: "top-center",
      });
      return;
    }

    try {
      const result = await signUp(data);

      toast.success("User is registered !!", {
        position: "top-center",
      });
      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1K1evWjMTfR3IMBxQxXSGV2pTaO2rAP7EzIMB4u0YwxfFL4pJ269eff6sNvuxtjI7c4s",
      });
    } catch (error) {
      console.log(error);
      toast.error("Signup Error !! " + error.response.data.message, {
        position: "top-center",
      });
    }
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1K1evWjMTfR3IMBxQxXSGV2pTaO2rAP7EzIMB4u0YwxfFL4pJ269eff6sNvuxtjI7c4s",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500">
      <div className="grid grid-cols-12">
        <div className="col-span-4 col-start-5">
          <div className="py-5">
            <form onSubmit={doSignup} className="mt-5 bg-white rounded-lg shadow-lg p-8">
              <div className="mt-5">
                <label htmlFor="user_name" className="block text-sm font-medium mb-2 text-gray-900">
                  Username
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-gray-200 focus:ring-2 focus:ring-purple-600 border border-gray-200"
                  placeholder="Enter username"
                  name="user_name"
                  onChange={(event) =>
                    setData({
                      ...data,
                      name: event.target.value,
                    })
                  }
                  value={data.name}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="user_email" className="block text-sm font-medium mb-2 text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-gray-200 focus:ring-2 focus:ring-purple-600 border border-gray-200"
                  placeholder="Enter email"
                  id="user_email"
                  name="user_email"
                  onChange={(event) =>
                    setData({
                      ...data,
                      email: event.target.value,
                    })
                  }
                  value={data.email}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="user_password" className="block text-sm font-medium mb-2 text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-3 rounded-lg bg-gray-200 focus:ring-2 focus:ring-purple-600 border border-gray-200"
                  placeholder="Enter password"
                  id="user_password"
                  onChange={(event) =>
                    setData({
                      ...data,
                      password: event.target.value,
                    })
                  }
                  value={data.password}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="user_about" className="block text-sm font-medium mb-2 text-gray-900">
                  About
                </label>
                <textarea
                  className="w-full p-3 rounded-lg bg-gray-200 focus:ring-2 focus:ring-purple-600 border border-gray-200 resize-none"
                  placeholder="Tell us about yourself"
                  id="user_about"
                  name="user_about"
                  rows={1}
                  onChange={(event) =>
                    setData({
                      ...data,
                      about: event.target.value,
                    })
                  }
                  value={data.about}
                ></textarea>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md mr-4"
                >
                  Signup
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
