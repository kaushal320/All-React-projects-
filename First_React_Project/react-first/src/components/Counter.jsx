import React, { useState } from "react";
import "../style.css";
const Counter = () => {
  const [counter, setcount] = useState(0);
  const increment = () => {
    setcount(counter + 1);
  };
  const decrement = () => {
    setcount(counter - 1);
  };
  return (
    <>
      <div className="container">
        <div>
          <h1 className="number"> {counter} </h1>
        </div>
        <div className="btn-container">
          <button onClick={increment} className="increment">
            +
          </button>
          <button onClick={decrement} className="increment">
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
