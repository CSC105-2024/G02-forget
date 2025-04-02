import React from "react";

const ChangeTemplate = () => {
  const changeColor = (bgColor,navColor) => {
    document.documentElement.style.setProperty("--template-background-color", bgColor);
    document.documentElement.style.setProperty("--template-navbar-color", navColor);
  };

  return (
    <div className="templateButtons flex flex-col gap-5">
      <button className="defaultTemplate" onClick={() => changeColor("#ECECEC","#F2F2F2")}>
      </button>
      <button className="pinkTemplate" onClick={() => changeColor("#FFACAC","#FFBBBB")}>
      </button>
      <button className="yellowTemplate" onClick={() => changeColor("#FFD558","#FFDD78")}>
      </button>
      <button className="orangeTemplate" onClick={() => changeColor("#FFB163","#FFBB77")}>
      </button>
    </div>
  );
};

export default ChangeTemplate;