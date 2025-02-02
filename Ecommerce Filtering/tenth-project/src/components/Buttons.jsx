import React from "react";

const Buttons = ({ title, value, onClickHandler }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
};

export default Buttons;
