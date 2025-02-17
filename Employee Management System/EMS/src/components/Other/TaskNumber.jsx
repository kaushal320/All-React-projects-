import React from "react";

const TaskNumber = () => {
  return (
    <>
      <div className="flex mt-10 justify-between gap-5 screen">
        <div className="rounded-xl w-[30%] py-6 px-9 p-10 bg-red-500">
          <h2 className="text-white text-2xl">0</h2>
          <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className="rounded-xl w-[30%] py-6 px-9 p-10 bg-blue-500">
          <h2 className="text-white text-2xl">0</h2>
          <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className="rounded-xl w-[30%] py-6 px-9 p-10 bg-green-500">
          <h2 className="text-white text-2xl">0</h2>
          <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className="rounded-xl w-[30%] py-6 px-9 p-10 bg-yellow-500">
          <h2 className="text-white text-2xl">0</h2>
          <h3 className="text-xl font-medium">New Task</h3>
        </div>
      </div>
    </>
  );
};

export default TaskNumber;
