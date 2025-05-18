import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import * as apiUser from "../api/user"
import { editTemplate } from '../component/ChangeTemplate'
import { useEffect, useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

import RedEmoji from '../img/RedEmoji.png';
import OrangeEmoji from '../img/OrangeEmoji.png';
import YellowEmoji from '../img/YellowEmoji.png';
import LightGreenEmoji from '../img/LightGreenEmoji.png';
import GreenEmoji from '../img/GreenEmoji.png';
import Emptybox from '../img/EmptyBox.png';

const ProfilePage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [resultText, setResultText] = useState("");
  const [resultEmoji, setResultEmoji] = useState("");
  const [showEmoji, setShowEmoji] = useState(true)

  const userAccount = parseInt(localStorage.getItem("userAccount"));

  const fetchTemplate = async (id) => {
        const data = await apiUser.getTemplate(id);
        if (data.success) {
          if (data.data.data.template === "white") {
            editTemplate("#ECECEC","#F6F6F6","#F2F2F2",1);
          } else if (data.data.data.template === "pink") {
            editTemplate("#FFACAC","#FFD2D2","#FFBBBB",2);
          } else if (data.data.data.template === "yellow") {
            editTemplate("#FFD558","#FFE59A","#FFDD78",3);
          } else if (data.data.data.template === "orange") {
            editTemplate("#FFB163","#FFD4A9","#FFBB77",4);
          }
              
      }
    };

    const fetchProfile = async (id) => {
      const data = await apiUser.getInfoUser(id);
      if (data.success) {
        setUsername(data.data.username);
        setEmail(data.data.email);
      }
  };

  function prevMonth() {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1)); 
  }

  function nextMonth() {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  }

  const getResult = async (month, year, userId) => {
    const data = await apiUser.getDiaryFromUser(month, year, userId);
        if (data.success) {
          let point = 0;
          for (let i = 0; i < data.data.data.length; i++) {
            if (data.data.data[i].emoji === "/src/img/GreenEmoji.png") {
              point += 5;
            } else if (data.data.data[i].emoji === "/src/img/LightGreenEmoji.png") {
              point += 4;
            } else if (data.data.data[i].emoji === "/src/img/YellowEmoji.png") {
              point += 3;
            } else if (data.data.data[i].emoji === "/src/img/OrangeEmoji.png") {
              point += 2;
            } else if (data.data.data[i].emoji === "/src/img/RedEmoji.png") {
              point += 1;
            }
          }
          setShowEmoji(true);
          let result = Math.floor(point / data.data.data.length);
          if (result === 5) {
            setResultText("You look absolutely joyful!");
            setResultEmoji(GreenEmoji);
          } else if (result === 4) {
            setResultText("You seem pleased with things");
            setResultEmoji(LightGreenEmoji);
          } else if (result === 3) {
            setResultText("You look calm and collected");
            setResultEmoji(YellowEmoji);
          } else if (result === 2) {
            setResultText("You look a bit downcast");
            setResultEmoji(OrangeEmoji);
          } else if (result === 1) {
            setResultText("You look deeply depressed");
            setResultEmoji(RedEmoji);
          } else {
            setResultText("Don't have diary in this month");
            setShowEmoji(false);
          }
        }
  }
    
      
    useEffect(() => {
      fetchTemplate(userAccount);
      fetchProfile(userAccount);
      getResult(currentMonth.toLocaleString('default', { month: 'long'}), currentMonth.toLocaleString('default', {year: 'numeric' }), userAccount);
    }, []);

    useEffect(() => {
      getResult(currentMonth.toLocaleString('default', { month: 'long'}), currentMonth.toLocaleString('default', {year: 'numeric' }), userAccount);
    }, [currentMonth])
    
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("userAccount");
    navigate('/signin');
  };

  return (
      <div className='Background'>
      <div className="flex flex-col-reverse lg:flex-col "> 
      <Navbar />
      <div className=" w-screen h-screen flex flex-col items-start p-2 lg:p-10">
        
        <h1 className="text-[54px] mt-20 font-medium, font-[Rajdhani] max-sm:mt-4">Hello! {username}</h1>
        <p className="text-black text-[24px] lg:text-gray-600 lg:text-[30px] font-[Rajdhani]">{email}</p>
        <div className="flex flex-col w-full justify-center items-center h-screen lg:justify-start">
        <div className='flex SecondaryBackground justify-between items-center w-100 h-25 mb-10 px-4 bg-[#F6F6F6] rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'>
             <MdNavigateBefore onClick={() => prevMonth()} className='text-[24px] text-white bg-black rounded-2xl cursor-pointer'/>
                    <div className='text-center'>
                        <h2 className='text-[56px] font-medium'>
                        {currentMonth.toLocaleString('default', { month: 'long'})}</h2>
                        <p className='text-[24px] -mt-6'>
                        {currentMonth.toLocaleString('default', {year: 'numeric' })}</p>
                    </div>
                  <MdNavigateNext onClick={() => nextMonth()} className='text-[24px] text-white bg-black rounded-2xl cursor-pointer'/>
          </div>

          <div className="bg-white p-2 rounded-xl shadow-lg flex flex-row items-center  w-[100%] h-60 text-center md:w-[90%] lg:p-6 lg:w-[50%]">
            {showEmoji && <img src={resultEmoji} className= "  w-25 lg:w-[264px]   "  />}
            <p className="text-[27px]  font-bold font-[Rajdhani] mt-4 w-[100%]  text-center lg:text-[56px]">{resultText}</p>
          </div>

          <div className=" flex flex-row justify-center w-[100%] lg:justify-start"> 
          <button 
            onClick={handleSignOut}
            className="mt-6 px-4 py-2  text-[16px] font-[Rajdhani] font-bold rounded-md bg-[red] text-white  transition cursor-pointer shadow-lg lg:py-3 px-2 lg:text-[24px]"
          >
            Sign out
          </button>

        </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default ProfilePage;
