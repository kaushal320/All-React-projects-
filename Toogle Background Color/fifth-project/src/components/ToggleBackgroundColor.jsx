import React, { useState } from "react";
import "../styles.css";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setbackgrounndcolor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");
  const handleClick = () => {
    setbackgrounndcolor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(buttonStyle === "white" ? "#1b1b1b" : "white");
  };
  return (
    <div>
      <div style={{ backgroundColor, color: textColor }}>
        <button
          onClick={handleClick}
          style={{
            buttonStyle,
            color: textColor,
            border: `1px solid ${textColor}`,
          }}
        >
          {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
        </button>
        <section className="content">
          <h1>Welcome to Change Background Color </h1>
        </section>
      </div>
    </div>
  );
};

export default ToggleBackgroundColor;
