import React from "react";
import * as apiUser from '../api/user';

const ChangeTemplate = () => {
  const changeTemplate = async (id, template) => {
    await apiUser.changeTemplate(id, template)
  }
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
    <div className="grid grid-cols-2 gap-4 p-4 justify-items-center lg:grid-cols-1 lg:flex lg:flex-col lg:gap-5 lg:items-center">
      <button className="defaultTemplate w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-lg" onClick={() => changeColor("#ECECEC","#F6F6F6","#F2F2F2",1)}>
      </button>
      <button className="pinkTemplate w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-lg" onClick={() => changeColor("#FFACAC","#FFD2D2","#FFBBBB",2)}>
      </button>
      <button className="yellowTemplate w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-lg" onClick={() => changeColor("#FFD558","#FFE59A","#FFDD78",3)}>
      </button>
      <button className="orangeTemplate w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-lg" onClick={() => changeColor("#FFB163","#FFD4A9","#FFBB77",4)}>
      </button>
    </div>
  );
};

export default ChangeTemplate;