import React from 'react'
import BookImage from '../img/book.png'
import { Link } from "react-router-dom";
import { Axios } from '../axiosInstance';
import { useEffect } from 'react';

const HomePage = () => {
  const testConnection = async () => {
		try {
			const data = await Axios.get('/');
			console.log(data.data);
		} catch (e) {
			console.log(`Error fetching backend server: ${e}`);
		}
	};
  useEffect(() => {
    testConnection();
  }, []);
  return (
    <>
        <div className='flex items-center bg-[#ECECEC] h-screen'>
            <div className='w-[1000px] mx-auto 
            md:max-lg:w-[90%] 
            sm:max-md:w-[90%]
            max-sm:w-[90%]'>
              <section className='flex justify-evenly items-center h-[500px] p-[12px] bg-white rounded-[10px] drop-shadow-xl rounded-[10px]
              max-sm:flex-col-reverse max-sm:h-[600px]'>
              <div className='max-sm:-mt-[100px]'>
                <h1 className='text-[64px] font-medium leading-[60px] 
                md:max-lg:text-[48px] md:max-lg:leading-[50px] 
                sm:max-md:text-[42px] sm:max-md:leading-[40px]
                max-sm:text-[30px] max-sm:leading-[30px] max-sm:text-center'>Welcome to <br className='max-sm:hidden'></br>our web diary</h1>
                <p className='text-[40px] text-[#737373] font-medium mt-[30px] 
                md:max-lg:text-[28px]
                sm:max-md:text-[22px]
                max-sm:text-[16px]'>Let's start your first diary</p>
                <Link to="/signin">
                  <button className='text-[24px] bg-black text-white mt-[20px]  py-[5px] px-[10px] rounded-[8px] border-none cursor-pointer transition duration-700 
                  hover:bg-[#3A3A3A] hover:drop-shadow-2xl
                  md:max-lg:text-[20px]
                  sm:max-md:text-[16px]
                  max-sm:text-[16px] max-sm:py-[3px] max-sm:px-[8px]'>Your Diary</button>
                </Link>
              </div>
              <div className='flex flex-col items-center'>
                <img src={BookImage} alt="" className='w-[400px] z-1 
                md:max-lg:w-[350px]
                sm:max-md:w-[300px]
                max-sm:w-[250px]'/>
                <div className='relative z-0 bottom-[100px] w-[375px] h-[75px] bg-black rounded-[100%] opacity-25 
                md:max-lg:w-[325px] md:max-lg:h-[70px] md:max-lg:bottom-[90px]
                sm:max-md:w-[275px] sm:max-md:h-[65px] sm:max-md:bottom-[80px]
                max-sm:w-[225px] max-sm:h-[55px] max-sm:bottom-[70px]'></div>
              </div>
              </section>
            </div>
          </div>
        </>
  )
}

export default HomePage