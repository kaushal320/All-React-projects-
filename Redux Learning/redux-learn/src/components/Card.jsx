import React from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../Utils/cartSlice";

const Card = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(addtocart());
        }}
        style={{
          backgroundColor: "blue",
          padding: "16px",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "16px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
