import React from "react";

const ChangeTemplate = () => {
  const changeColor = (bgColor,secondaryBg,navColor,selected) => {
    document.documentElement.style.setProperty("--template-background-color", bgColor);
    document.documentElement.style.setProperty("--template-navbar-color", navColor);
    document.documentElement.style.setProperty("--template-secondary-background-color", secondaryBg);
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
      <button className="defaultTemplate" onClick={() => changeColor("#ECECEC","#F6F6F6","#F2F2F2",1)}>
      </button>
      <button className="pinkTemplate" onClick={() => changeColor("#FFACAC","#FFD2D2","#FFBBBB",2)}>
      </button>
      <button className="yellowTemplate" onClick={() => changeColor("#FFD558","#FFE59A","#FFDD78",3)}>
      </button>
      <button className="orangeTemplate" onClick={() => changeColor("#FFB163","#FFD4A9","#FFBB77",4)}>
      </button>
    </div>
  );
};

export default ChangeTemplate;