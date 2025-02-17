import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium ">
        Hi,
        <br />
        <span className="text-3xl font-semibold">Kaushal</span>
      </h1>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Header;
