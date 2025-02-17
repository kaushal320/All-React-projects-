import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 py-4 px-10 text-xl rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            className=" outline-none bg-transparent mt-4 border-2 border-emerald-600 py-4 px-10 text-xl rounded-full placeholder:text-gray-400"
            placeholder="Enter Password"
          />
          <button className=" text-black  outline-none  mt-4   bg-emerald-600 py-4 px-5 text-xl w-full rounded-full placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
