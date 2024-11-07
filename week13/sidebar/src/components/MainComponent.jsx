import React from "react";

const MainComponent = () => {
  return (
    <div className=" w-full ">
      main Content
      <button
        onClick={() => document.querySelector("html").classList.toggle("dark")}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Toggle DarkMode
      </button>
    </div>
  );
};

export default MainComponent;
