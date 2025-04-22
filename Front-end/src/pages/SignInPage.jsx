import React from 'react'
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import BackgroundSignIn from '../img/Background-SignIn.png';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const SignInPage = () => {
  return (
    <>
        <div className='flex flex-row
        sm:max-md:block'>
            <img src={BackgroundSignIn} alt=""className='w-[50%] h-screen
            md:max-lg:w-[45%]
            sm:max-md:hidden
            max-sm:hidden'/>
            <div className='bg-white w-[50%] h-screen flex justify-center
            md:max-lg:w-[90%]
            sm:max-md:bg-[url(img/Background-SignIn.png)] bg-cover bg-no-repeat sm:max-md:w-[100%] sm:max-md:h-[100vh] sm:max-md:flex sm:max-md:justify-center sm:max-md:items-center
            max-sm:bg-[url(img/Background-SignIn.png)] bg-cover bg-no-repeat max-sm:w-[100%] max-sm:h-[100vh] max-sm: max-sm:flex max-sm:justify-center max-sm:items-center'>
                <section className='flex justify-center items-center flex-col p-1
                sm:max-md:w-[85%] sm:max-md:h-[95%] sm:max-md:rounded-[10px] sm:max-md:drop-shadow-xl
                max-sm:w-[85%] max-sm:h-[90%] max-sm:rounded-[10px] max-sm:drop-shadow-xl'>
                    <div>
                        <h2 className='text-[56px] font-medium
                        max-sm:text-[48px]
                        max-[490px]:text-[36px]'>Sign in</h2>
                    </div>
                    <div className='border-1 border-[#D9D9D9] rounded-[5px] p-[24px] w-[420px] h-[500px]
                    sm:max-md:bg-white sm:max-md:w-[90%]
                    max-sm:bg-white max-sm:w-[90%]
                    '>
                        <form action="">
                            <label htmlFor="" className='text-[16px] font-medium'>Username or Email</label><br />
                            <input type="text" className='border-1 rounded-[5px] border-[#D9D9D9] w-[100%] p-[5px] mb-[24px]'/><br />
                            <label htmlFor="" className='text-[16px] font-medium '>Password</label><br />
                            <input type="password" className='border-1 rounded-[5px] border-[#D9D9D9] w-[100%] p-[5px]'/><br />
                            <button type="submit"className='w-[100%] bg-black text-white rounded-[5px] py-[5px] font-medium mt-[36px] cursor-pointer transition duration-700
                            hover:bg-[#3A3A3A]'>Sign in</button>
                        </form>
                        <p className='mt-[28px] text-[16px] underline font-medium cursor-pointer'>Forgot password?</p>
                        <p className='mt-[36px] text-[16px] text-center'>Don't have an account? <br className='hidden max-sm:block'/><Link to="/signup" className='underline font-bold cursor-pointer'>Sign up for free</Link></p>
                    </div>
                    <Link to="/" className='ml-90 my-5 max-sm:ml-50'>
                        <div className='flex flex-row items-center float-right cursor-pointer
                        sm:max-md:w-[100%]  sm:max-md:
                        max-sm: max-sm:'>
                            <FaArrowLeft className='mr-[5px] text-sm'/>
                            <p className='text-[20px] font-medium mx-auto'>Back</p>
                        </div>
                    </Link>
                </section>
            </div>
        </div>
    </>
  )
}

export default SignInPage
