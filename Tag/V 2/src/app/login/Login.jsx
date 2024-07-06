"use client";
import UserContext from "@/context/userContext";
import { login } from "@/services/userService";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const context = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginFormSubmitted = async (event) => {
    event.preventDefault();
    console.log(loginData);
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("Invalid Data !!", {
        position: "top-center",
      });
      return;
    }

    try {
      const result = await login(loginData);
      console.log(result);
      toast.success("Logged In");
      context.setUser(result.user);
      router.push("/");  // push to most outer page.js
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Login</h1>

        <form onSubmit={loginFormSubmitted} className="space-y-6">
          <div>
            <label
              htmlFor="user_email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 transition duration-300"
              placeholder="Enter your email"
              id="user_email"
              name="user_email"
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  email: event.target.value,
                });
              }}
              value={loginData.email}
            />
          </div>

          <div>
            <label
              htmlFor="user_password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 transition duration-300"
              placeholder="Enter your password"
              id="user_password"
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  password: event.target.value,
                });
              }}
              value={loginData.password}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
            >
              Login
            </button>
            <button
              type="button"
              className="px-5 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-500 ml-3 transition duration-300"
              onClick={() => setLoginData({ email: "", password: "" })}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
