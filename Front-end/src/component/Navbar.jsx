import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import bookNav from '../img/booknav.png'
import templateNav from '../img/templatenav.png'
import profileNav from '../img/profilenav.png'
import bar from '../img/bar.png'


const Navbar = () => {
    const location = useLocation();
  return (
    <>
    <header className='Navbar -my-16 lg:my-0 drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'>
        <nav className='flex z-40 justify-between items-center px-2 py-2'>
            <div className='hidden flex flex-col items-center lg:block ml-10'>
                <h2 className='text-[56px] font-medium text-center'>YD</h2>
                <p className='text-[20px] font-light -mt-5 text-center'>Your Diary</p>
            </div>
            
            <div className=' z-40 mr-20 lg:block hidden  '>  
                <NavLink to="/diary" className={`${location.pathname.startsWith("/diary") ? "font-bold" : "font-normal"}
                mr-10 text-[24px] font-medium`}>Diary</NavLink>
                <NavLink to="/template" className={`${location.pathname === "/template" ? "font-bold" : "font-normal"}
                mr-10 text-[24px] font-medium`}>Template</NavLink>
                <NavLink to="/profile" className=" px-5 py-2 text-[24px] bg-black rounded-xl text-white font-medium">Profile</NavLink>
            </div>
            <div className="flex flex-row justify-evenly items-center w-[100%] lg:hidden"> 
                <NavLink to="/diary" className={`
                mr-10 text-[24px]`}>
                    <img className="w-15"src={bookNav}></img>
                    <img className={`${location.pathname.startsWith("/diary") ? "" : "hidden"} w-15 py-1`} src={bar}></img>
                </NavLink>
                <NavLink to="/template" className={`
                mr-10 text-[24px] `}>
                    <img className="w-10"src={templateNav}></img>
                    <img className={`${location.pathname.startsWith("/template") ? "" : "hidden"} w-10 py-1`} src={bar}></img>
                </NavLink>
                <NavLink to="/profile" className="">
                    <img className="w-10"src={profileNav}></img>
                    <img className={`${location.pathname.startsWith("/profile") ? "" : "hidden"} w-10 py-1`} src={bar}></img>
                </NavLink>
            </div>
        
            
        </nav>
    </header>
    </>
  )
}

export default Navbar
