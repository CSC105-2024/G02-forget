import React from 'react'
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import BackgroundSignUp from '../img/Background-SignUp.png';

const SignUpPage = () => {
  return (
    <>
    <div className='flex flex-row
        sm:max-md:block'>
            <div className='bg-white w-[50%] h-screen flex justify-center
            md:max-lg:w-[90%]
            sm:max-md:bg-[url(img/Background-SignUp.png)] bg-cover bg-no-repeat sm:max-md:w-[100%] sm:max-md:h-[100vh] sm:max-md:flex sm:max-md:justify-center sm:max-md:items-center
            max-sm:bg-[url(img/Background-SignUp.png)] bg-cover bg-no-repeat max-sm:w-[100%] max-sm:h-[100vh] max-sm: max-sm:flex max-sm:justify-center max-sm:items-center'>
                <section className='flex justify-center items-center flex-col p-1
                sm:max-md:w-[85%] sm:max-md:h-[95%] sm:max-md:rounded-[10px] sm:max-md:drop-shadow-xl
                max-sm:w-[85%] max-sm:h-[90%] max-sm:rounded-[10px] max-sm:drop-shadow-xl'>
                    <div>
                        <h2 className='text-[56px] font-medium
                        max-sm:text-[48px]
                        max-[490px]:text-[36px]'>Sign up</h2>
                    </div>
                    <div className='border-1 border-[#D9D9D9] rounded-[5px] p-[24px] w-[420px] h-[500px]
                    sm:max-md:bg-white sm:max-md:w-[90%]
                    max-sm:bg-white max-sm:w-[90%]
                    '>
                        <form action="">
                            <label htmlFor="" className='text-[16px] font-medium'>Username</label><br />
                            <input type="text" className='border-1 rounded-[5px] border-[#D9D9D9] w-[100%] p-[5px] mb-[24px]' placeholder='Enter your useraname'/><br />
                            <label htmlFor="" className='text-[16px] font-medium'>Email</label><br />
                            <input type="text" className='border-1 rounded-[5px] border-[#D9D9D9] w-[100%] p-[5px] mb-[24px]' placeholder='Enter your email'/><br />
                            <label htmlFor="" className='text-[16px] font-medium '>Password</label><br />
                            <input type="text" className='border-1 rounded-[5px] border-[#D9D9D9] w-[100%] p-[5px] mb-[24px]' placeholder='Enter your password'/><br />
                            <label htmlFor="" className='text-[16px] font-medium '>Confirm password</label><br />
                            <input type="text" className='border-1 rounded-[5px] border-[#D9D9D9] w-[100%] p-[5px]' placeholder='Enter your password'/><br />
                            <button type="submit"className='w-[100%] bg-black text-white rounded-[5px] py-[5px] font-medium mt-[36px] cursor-pointer transition duration-700
                            hover:bg-[#3A3A3A]'>Sign up</button>
                        </form>
                    </div>
                    <Link to="/" className='mr-90 my-5 sm:max-md:ml-190 max-sm:ml-140'>
                        <div className='flex flex-row items-center float-right cursor-pointer
                        sm:max-md:w-[100%]  sm:max-md:
                        max-sm: max-sm:'>
                            <FaArrowLeft className='mr-[5px] text-sm'/>
                            <p className='text-[20px] font-medium mx-auto'>Back</p>
                        </div>
                    </Link>
                </section>
            </div>
            <img src={BackgroundSignUp} alt=""className='w-[50%] h-screen
            md:max-lg:w-[45%]
            sm:max-md:hidden
            max-sm:hidden'/>
        </div>
    </>
  )
}

export default SignUpPage