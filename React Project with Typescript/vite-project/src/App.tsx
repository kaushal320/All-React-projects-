import React, { Profiler } from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Tab from "./components/Tab";
const App = () => {
  return (
    <>
      <div>
        <Sidebar />
        <Profile />
        <Tab />
      </div>
    </>
  );
};

export default App;
