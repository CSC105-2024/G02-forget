import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import QuietHappy from '../img/Quiethappy.png'
import * as apiUser from "../api/user"
import { editTemplate } from '../component/ChangeTemplate'
import { useEffect, useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const ProfilePage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
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
    
      
    useEffect(() => {
      fetchTemplate(1);
      fetchProfile(1);
      
    }, []);
    
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('userToken');
    navigate('/signin');
  };

  function prevMonth() {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
  }

  function nextMonth() {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  }

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
            <img src={QuietHappy} alt="Quiethappy" className= "  w-25 lg:w-[264px]   "  />
            <p className="text-[27px]  font-bold font-[Rajdhani] mt-4 w-[100%]  text-center lg:text-[56px]">You look Quite happy</p>
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
