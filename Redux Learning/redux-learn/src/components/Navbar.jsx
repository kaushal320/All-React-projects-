import React from "react";

import { useSelector } from "react-redux";
const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.k);
  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "10px",
      }}
    >
      <h1>
        Card<span>{cartItems}</span>
      </h1>
    </div>
  );
};

export default Navbar;
