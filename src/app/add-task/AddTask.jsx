"use client";
import React, { useState } from "react";
import loginSvg from "../../assets/home.gif";
import Image from "next/image";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "64a506ab413f1d5bcafcdbec",
  });

  const [isOpen, setIsOpen] = useState(false); // State to track if select dropdown is open

  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log(task);

    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Your task is added !!", {
        position: "top-center",
      });

      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("Task not added !!", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center w-full max-w-screen-lg">
        {/* Image Section */}
        <div className="col-span-1 md:col-span-1 flex justify-center">
          <div className="my-8">
            <Image
              src={loginSvg}
              alt="Login banner"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="col-span-1 md:col-span-1 p-5 shadow-md rounded-lg bg-gray-800 text-white">
          <h1 className="text-3xl text-center font-bold mb-4">Fill Your Diary</h1>

          <form onSubmit={handleAddTask} className="space-y-4">
            {/* Task title */}
            <div>
              <label htmlFor="task_title" className="block text-sm font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-700 focus:ring-gray-400 border border-gray-700 text-white"
                id="task_title"
                name="task_title"
                onChange={(event) => setTask({ ...task, title: event.target.value })}
                value={task.title}
                required
              />
            </div>

            {/* Task content */}
            <div>
              <label htmlFor="task_content" className="block text-sm font-medium mb-2">
                Content
              </label>
              <textarea
                className="w-full p-3 rounded-lg bg-gray-700 focus:ring-gray-400 border border-gray-700 text-white"
                id="task_content"
                rows={5}
                name="task_content"
                onChange={(event) => setTask({ ...task, content: event.target.value })}
                value={task.content}
                required
              />
            </div>

            {/* Task status */}
            <div>
              <label htmlFor="task_status" className="block text-sm font-medium mb-2">
                Status
              </label>
              <select
                id="task_status"
                className={`w-full p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 focus:ring-purple-400 border border-purple-400 text-white ${isOpen ? 'text-black' : ''}`}
                name="task_status"
                onChange={(event) => setTask({ ...task, status: event.target.value })}
                value={task.status}
                required
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
              >
                <option value="none" disabled>
                  ---Select Status---
                </option>
                <option value="pending" className="text-black">
                  Pending
                </option>
                <option value="completed" className="text-black">
                  Completed
                </option>
              </select>
            </div>

            {/* Button actions */}
            <div className="mt-6 flex justify-center space-x-4">
              <button
                type="submit"
                className="bg-blue-600 py-3 px-6 rounded-lg hover:bg-blue-700 text-white font-semibold transition duration-300"
              >
                Add Task
              </button>
              <button
                type="button"
                onClick={() => setTask({ title: "", content: "", status: "none" })}
                className="bg-red-600 py-3 px-6 rounded-lg hover:bg-red-700 text-white font-semibold transition duration-300"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
