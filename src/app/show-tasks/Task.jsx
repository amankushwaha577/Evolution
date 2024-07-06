import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const Task = ({ task, deleteTaskParent }) => {
  const { user } = useContext(UserContext);

  function deleteTask(taskId) {
    // Delegate deletion to parent component
    deleteTaskParent(taskId);
  }

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">{task.title}</h1>
          <button
            onClick={() => deleteTask(task._id)}
            className="bg-red-600 rounded-full p-2 focus:outline-none hover:bg-red-700 transition duration-300"
          >
            <RiCloseCircleLine className="text-white" />
          </button>
        </div>
        <p className="text-gray-400 mt-2">{task.content}</p>
        <div className="flex justify-between mt-4">
          <p className="text-left text-gray-300">
            Status: <span className="font-semibold">{task.status}</span>
          </p>
          <p className="text-right text-gray-300">
            Author: <span className="font-semibold">{user?.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
