import React from "react";
import "../styles.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
const HiddenSearchBar = () => {
  const [showInput, setSHowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const handleClick = (e) => {
    setBgColor("#1a1a1a");

    if (e.target.className === "container") {
      setSHowInput(false);
      setBgColor("white");
    }
  };
  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setSHowInput(true)} />
      )}
    </section>
  );
};

export default HiddenSearchBar;
