import React from "react";

const ChangeTemplate = () => {
  const changeColor = (bgColor,navColor,selected) => {
    document.documentElement.style.setProperty("--template-background-color", bgColor);
    document.documentElement.style.setProperty("--template-navbar-color", navColor);
    switch (selected) {
      case 2:
        document.documentElement.style.setProperty("--template-default-border-width","0px");
        document.documentElement.style.setProperty("--template-pink-border-width","1px");
        document.documentElement.style.setProperty("--template-yellow-border-width","0px");
        document.documentElement.style.setProperty("--template-orange-border-width","0px");
        break;
      case 3:
        document.documentElement.style.setProperty("--template-default-border-width","0px");
        document.documentElement.style.setProperty("--template-pink-border-width","0px");
        document.documentElement.style.setProperty("--template-yellow-border-width","1px");
        document.documentElement.style.setProperty("--template-orange-border-width","0px");
        break;
      case 4:
        document.documentElement.style.setProperty("--template-default-border-width","0px");
        document.documentElement.style.setProperty("--template-pink-border-width","0px");
        document.documentElement.style.setProperty("--template-yellow-border-width","0px");
        document.documentElement.style.setProperty("--template-orange-border-width","1px");
        break;
      default:
        document.documentElement.style.setProperty("--template-default-border-width","1px");
        document.documentElement.style.setProperty("--template-pink-border-width","0px");
        document.documentElement.style.setProperty("--template-yellow-border-width","0px");
        document.documentElement.style.setProperty("--template-orange-border-width","0px");
        break;
    }
  };

  return (
    <div className="templateButtons flex flex-col gap-5">
      <button className="defaultTemplate" onClick={() => changeColor("#ECECEC","#F2F2F2",1)}>
      </button>
      <button className="pinkTemplate" onClick={() => changeColor("#FFACAC","#FFBBBB",2)}>
      </button>
      <button className="yellowTemplate" onClick={() => changeColor("#FFD558","#FFDD78",3)}>
      </button>
      <button className="orangeTemplate" onClick={() => changeColor("#FFB163","#FFBB77",4)}>
      </button>
    </div>
  );
};

export default ChangeTemplate;