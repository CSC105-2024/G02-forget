import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import QuietHappy from '../img/Quiethappy.png'
import left from '../img/Leftt.png'
import right from '../img/Rightt.png'

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('userToken');
    navigate('/signin');
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#ECECEC] w-screen h-screen flex flex-col items-start p-10">
        
        <h1 className="text-[60px] font-medium font-[Rajdhani]">Hello! Manow</h1>
        <p className="text-gray-600 text-[30px] font-medium font-[Rajdhani]">KiminoNaWa@gmail.com</p>
        <div className="flex flex-col w-full justify-center items-center">
        <div className="flex items-center justify-center gap-4 my-4">
          
          <button className="p-3 cursor-pointer">
            <img src={left} className = "w-10" /> 
          </button>
          <div className="flex flex-col items-center w - 30">
            <h2 className="text-[50px] text-[#000000] font-medium font-[Rajdhani]">Month</h2>
            <p className="text-[#000000] text-[25px]">2025</p>
          </div>
          <button className="p-2 cursor-pointer">
            <img src={right} className = "w-10"/>
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-row items-center  w-[60%] h-60 text-center">
          <img src={QuietHappy} alt="Quiethappy" className= "  w-60  "  />
          <p className="text-[35px]  font-bold font-[Rajdhani] mt-4 w-[100%]  text-center">You look Quite happy</p>
        </div>
        </div>
        <button 
          onClick={handleSignOut}
          className="mt-6 px-4 py-2  text-[20px] font-medium font-[Rajdhani] rounded-md bg-[#ffffff] transition cursor-pointer shadow-lg"
        >
          Sign out
        </button>
      </div>
    </>
  );
};

export default ProfilePage;
