import React from 'react'
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
  return (
    <>
    <header className='Navbar w-screen -my-16 lg:my-0 drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'>
        <nav className='flex justify-between items-center px-2  py-2'>
            <div className='hidden flex-col items-center lg:block'>
                <h2 className='text-[56px] font-medium'>YD</h2>
                <p className='text-[20px] font-light -mt-5'>Your Diary</p>
            </div>
            <div className='mr-20'>  
                <NavLink to="/diary" className={`${location.pathname.startsWith("/diary") ? "font-bold" : "font-normal"}
                mr-10 text-[24px] font-medium`}>Diary</NavLink>
                <NavLink to="/template" className={`${location.pathname === "/template" ? "font-bold" : "font-normal"}
                mr-10 text-[24px] font-medium`}>Template</NavLink>
                <NavLink to="/profile" className="px-5 py-2 text-[24px] bg-black rounded-xl text-white font-medium">Profile</NavLink>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar