import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import QuietHappy from '../img/Quiethappy.png'
import left from '../img/Leftt.png'
import right from '../img/Rightt.png'
import bookNav from '../img/booknav.png'
import templateNav from '../img/templatenav.png'
import profileNav from '../img/profilenav.png'

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('userToken');
    navigate('/signin');
  };

  return (
      <div className="flex flex-col-reverse lg:flex-col "> 
      <Navbar />
      
      <div className="bg-[#ECECEC] w-screen h-screen flex flex-col items-start p-2 lg:p-10">
        
        <h1 className="text-[54px] lg:text-[60px] font-medium, font-[Rajdhani]">Hello! Manow</h1>
        <p className="text-black text-[24px] lg:text-gray-600 lg:text-[30px] font-[Rajdhani]">KiminoNaWa@gmail.com</p>
        <div className="flex flex-col w-full justify-center items-center">
        <div className="flex items-center justify-center gap-4 my-4 bg-[#f2f2f2] shadow lg:bg-[#ececec] lg:shadow-none">
          
          <button className="p-3 cursor-pointer">
            <img src={left} className = "w-8 lg:w-10" /> 
          </button>
          <div className="flex flex-col items-center w-30">
            <h2 className="text-[40px] text-[#000000] font-medium font-[Rajdhani]">Month</h2>
            <p className="text-[#000000] text-[24px] lg:text-[25px] ">2025</p>
          </div>
          <button className="p-2 cursor-pointer">
            <img src={right} className = "w-8 lg:w-10"/>
          </button>
        </div>

        <div className="bg-white p-2 rounded-xl shadow-lg flex flex-row items-center  w-[100%] h-60 text-center  lg:p-6 lg:w-[60%]">
          <img src={QuietHappy} alt="Quiethappy" className= "  w-25 lg:w-60 "  />
          <p className="text-[27px]  font-bold font-[Rajdhani] mt-4 w-[100%]  text-center lg:text-[35px]">You look Quite happy</p>
        </div>
        </div>
        <div className=" flex flex-row justify-center w-[100%] lg:justify-start"> 
        <button 
          
          onClick={handleSignOut}
          className="mt-6 px-4 py-2  text-[20px] font-medium font-[Rajdhani] rounded-md bg-[#ffffff] transition cursor-pointer shadow-lg lg:shadow-none"
        >
          Sign out
        </button>
        </div>
      </div>
      </div>
    
  );
};

export default ProfilePage;
