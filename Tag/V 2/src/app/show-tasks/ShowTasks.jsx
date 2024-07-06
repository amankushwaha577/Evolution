"use client";
import UserContext from "@/context/userContext";
import { deleteTask, getTasksOfUser } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import { toast } from "react-toastify";

const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);

  async function loadTasks(userId) {
    try {
      const tasks = await getTasksOfUser(userId);
      setTasks([...tasks].reverse());
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (context.user) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  async function deleteTaskParent(taskId) {
    try {
      const result = await deleteTask(taskId);
      console.log(result);
      const newTasks = tasks.filter((item) => item._id !== taskId);
      setTasks(newTasks);
      toast.success("Your task is deleted ");
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting task !!");
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500">
      <div className="grid grid-cols-12 mt-5 justify-center w-full max-w-screen-xl">
        <div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4">
          <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-4xl font-extrabold mb-4 text-center">Your Diary = {tasks.length}</h1>

            {tasks.length === 0 ? (
              <p className="text-xl text-center">No tasks found. Keep soaring high!</p>
            ) : (
              <ul className="space-y-4">
                {tasks.map((task) => (
                  <Task
                    task={task}
                    key={task._id}
                    deleteTaskParent={deleteTaskParent}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTasks;
