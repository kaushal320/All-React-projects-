import React from "react";
import { accordionData } from "./utils/content";
import Accordions from "./components/Accordions";
const App = () => {
  return (
    <>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordions title={title} content={content} />
        ))}
      </div>
    </>
  );
};

export default App;
