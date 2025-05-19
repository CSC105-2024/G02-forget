import React from "react";
import * as apiUser from '../api/user';
import { useEffect } from "react";
import { useState } from "react";

import NoDiary from '../img/Nodiary.png';
import HaveDiary from '../img/HaveDiary.png';
import Profile from '../img/Profile.png';
import NoDiaryPink from '../img/NodiaryPink.png';
import HaveDiaryPink from '../img/HaveDiaryPink.png';
import ProfilePink from '../img/ProfilePink.png';
import NoDiaryYellow from '../img/NodiaryYellow.png';
import HaveDiaryYellow from '../img/HaveDiaryYellow.png';
import ProfileYellow from '../img/ProfileYellow.png';
import NoDiaryOrange from '../img/NodiaryOrange.png';
import HaveDiaryOrange from '../img/HaveDiaryOrange.png';
import ProfileOrange from '../img/ProfileOrange.png';

export function editTemplate(bgColor,secondaryBg,navColor,selected) {
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

const ChangeTemplate = () => {
  const [image1,setImage1] = useState()
  const [color,setColor] = useState()
  const [buttonNumber,setButtonNumber] = useState(1)

  function ICbutton1(){
    setButtonNumber(1)
  }
  function ICbutton2(){
    setButtonNumber(2)
  }
  function ICbutton3(){
    setButtonNumber(3)
  }
  
  function fetchImage(buttonNumber){
    if(buttonNumber === 1){
      if(color === 'white'){
        setImage1(NoDiary)
      }else if(color === 'pink'){
        setImage1(NoDiaryPink)
      }else if(color === 'yellow'){
        setImage1(NoDiaryYellow)
      }else if(color === 'orange'){
        setImage1(NoDiaryOrange)
      }
    }else if(buttonNumber === 2){
      if(color === 'white'){
        setImage1(HaveDiary)
      }else if(color === 'pink'){
        setImage1(HaveDiaryPink)
      }else if(color === 'yellow'){
        setImage1(HaveDiaryYellow)
      }else if(color === 'orange'){
        setImage1(HaveDiaryOrange)
      }
    }else if(buttonNumber === 3){
      if(color === 'white'){
        setImage1(Profile)
      }else if(color === 'pink'){
        setImage1(ProfilePink)
      }else if(color === 'yellow'){
        setImage1(ProfileYellow)
      }else if(color === 'orange'){
        setImage1(ProfileOrange)
      }
    }
  }
  const userAccount = parseInt(localStorage.getItem("userAccount"));
  // API
  const changeTemplate = async (id, template) => {
    const data = await apiUser.changeTemplate(id, template)
    if (data.success) {
      console.log(data.data);
    }
  }

  const fetchTemplate = async (id) => {
      const data = await apiUser.getTemplate(id);
      if (data.success) {
        if (data.data.data.template === "white") {
          changeColor("#ECECEC","#F6F6F6","#F2F2F2",1);
          setImage1(NoDiary);
          setColor('white');
        } else if (data.data.data.template === "pink") {
          changeColor("#FFACAC","#FFD2D2","#FFBBBB",2);
          setImage1(NoDiaryPink);
          setColor('pink');
        } else if (data.data.data.template === "yellow") {
          changeColor("#FFD558","#FFE59A","#FFDD78",3);
          setImage1(NoDiaryYellow);
          setColor('yellow');
        } else if (data.data.data.template === "orange") {
          changeColor("#FFB163","#FFD4A9","#FFBB77",4);
          setImage1(NoDiaryOrange);
          setColor('orange');
        }
        
      }
    };

    useEffect(() => {
      fetchTemplate(userAccount);
      }, []);
    
      useEffect(() => {
        let imgSrc;
        if (buttonNumber === 1) {
          imgSrc = {
            white: NoDiary,
            pink: NoDiaryPink,
            yellow: NoDiaryYellow,
            orange: NoDiaryOrange,
          }[color];
        } else if (buttonNumber === 2) {
          imgSrc = {
            white: HaveDiary,
            pink: HaveDiaryPink,
            yellow: HaveDiaryYellow,
            orange: HaveDiaryOrange,
          }[color];
        } else if (buttonNumber === 3) {
          imgSrc = {
            white: Profile,
            pink: ProfilePink,
            yellow: ProfileYellow,
            orange: ProfileOrange,
          }[color];
        }
      
        setImage1(imgSrc);
      }, [color, buttonNumber]);
      

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
        changeTemplate(userAccount, "pink");
        setColor('pink')
        fetchImage(buttonNumber)
        console.log(buttonNumber)
        break;
      case 3:
        document.documentElement.style.setProperty("--template-default-border-width","0px");
        document.documentElement.style.setProperty("--template-pink-border-width","0px");
        document.documentElement.style.setProperty("--template-yellow-border-width","1px");
        document.documentElement.style.setProperty("--template-orange-border-width","0px");
        changeTemplate(userAccount, "yellow");
        setColor('yellow')
        fetchImage(buttonNumber)
        console.log(buttonNumber)
        break;
      case 4:
        document.documentElement.style.setProperty("--template-default-border-width","0px");
        document.documentElement.style.setProperty("--template-pink-border-width","0px");
        document.documentElement.style.setProperty("--template-yellow-border-width","0px");
        document.documentElement.style.setProperty("--template-orange-border-width","1px");
        changeTemplate(userAccount, "orange");
        setColor('orange')
        fetchImage(buttonNumber)
        console.log(buttonNumber)
        break;
      default:
        document.documentElement.style.setProperty("--template-default-border-width","1px");
        document.documentElement.style.setProperty("--template-pink-border-width","0px");
        document.documentElement.style.setProperty("--template-yellow-border-width","0px");
        document.documentElement.style.setProperty("--template-orange-border-width","0px");
        changeTemplate(userAccount, "white");
        setColor('white')
        fetchImage(buttonNumber)
        console.log(buttonNumber)
        break;
    }
  };

  return (<>
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
      
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-[90%] rounded-[3px] border-1 mb-10 lg:w-[600px] lg:h-[475px] lg:rounded-[3px] mb-10">
          <div classname="templateExamplePic">
            <img id ={'exampleImage'} src={image1}/>
          </div>
        </div>
        <div className="flex w-[200px] h-[40px] bg-[#F2F2F2] rounded-[20px] border-1 items-center justify-between ">
            <button className="templateExample1 ml-3" onClick={ICbutton1}>
            </button>
            <button className="templateExample2" onClick={ICbutton2}>
            </button>
            <button className="templateExample3 mr-3" onClick={ICbutton3}>
            </button>
        </div>
          {/* <TemplateExample /> */}
        </div>
      </>
  );
};

export default ChangeTemplate;