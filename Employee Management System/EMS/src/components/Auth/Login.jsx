import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-red-600">
        <form className="flex flex-col items-center justify-center">
          <input
            className="text-black outline-none bg-transparent border-2 border-emerald-600 py-4 px-10 text-xl rounded-full placeholder:text-white"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            className="text-black outline-none bg-transparent border-2 border-emerald-600 py-4 px-10 text-xl rounded-full placeholder:text-white"
            placeholder="Enter Password"
          />
          <button className="text-black outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full placeholder:text-white">
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
