import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import BackgroundSignIn from '../img/Background-SignIn.png';
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import { z } from "zod";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "" 
  });
  const [errors, setErrors] = useState({});

  const userSchema = z.object({
    username: z.string().min(1, "Wrong username"),
    // email: z.string().email(),
    password: z.string().min(4, "Wrong passwrod")
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    const result = userSchema.safeParse(formData);
    if (result.success) {
      console.log("Validation successful:", result.data);
    } else {
      console.log("Validation errors:", result.error.errors);
      const errorMap = {};
      result.error.errors.forEach((err) => {
        errorMap[err.path[0]] = err.message;
      });
      setErrors(errorMap);
    }
  };

  return (
    <>
      <div className='flex flex-row sm:max-md:block'>
        <img src={BackgroundSignIn} alt="" className='w-[50%] h-screen
          md:max-lg:w-[45%]
          sm:max-md:hidden
          max-sm:hidden'
        />
        <div className='bg-white w-[50%] h-screen flex justify-center
          md:max-lg:w-[90%]
          sm:max-md:bg-[url(img/Background-SignIn.png)] bg-cover bg-no-repeat sm:max-md:w-[100%] sm:max-md:h-[100vh] sm:max-md:flex sm:max-md:justify-center sm:max-md:items-center
          max-sm:bg-[url(img/Background-SignIn.png)] bg-cover bg-no-repeat max-sm:w-[100%] max-sm:h-[100vh] max-sm: max-sm:flex max-sm:justify-center max-sm:items-center'
        >
          <section className='flex justify-center items-center flex-col p-1
            sm:max-md:w-[85%] sm:max-md:h-[95%] sm:max-md:rounded-[10px] sm:max-md:drop-shadow-xl
            max-sm:w-[85%] max-sm:h-[90%] max-sm:rounded-[10px] max-sm:drop-shadow-xl'
          >
            <div>
              <h2 className='text-[56px] font-medium
                max-sm:text-[48px]
                max-[490px]:text-[36px]'
              >
                Sign in
              </h2>
            </div>
            <div className='border-1 border-[#D9D9D9] rounded-[5px] p-[24px] w-[420px] h-[500px]
              sm:max-md:bg-white sm:max-md:w-[90%]
              max-sm:bg-white max-sm:w-[90%]'
            >
              <form onSubmit={handleSubmit}>
                <label className='text-[16px] font-medium'>Username or Email</label><br />
                {errors.username && <span className='text-red-600'>{errors.username}</span>}
                <input type="text" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} className='border-1 rounded-[5px] border-[#D9D9D9] w-[100%] p-[5px] mb-[24px]' placeholder='Enter your Email or Username'/><br />

                <label className='text-[16px] font-medium'>Password</label><br />
                {errors.password && <span className='text-red-600'>{errors.password}</span>}
                <div className='relative mb-[24px]'>
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute top-1/2 right-[10px] transform -translate-y-1/2 text-sm text-gray-600'>
                    {showPassword ? <FiEye className='text-[25px]'/> : <GoEyeClosed className='text-[25px]'/>}
                  </button>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className='border-1 rounded-[5px] border-[#D9D9D9] w-[100%] p-[5px] pr-[40px]'
                    placeholder='Enter your password'
                    value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}/>
                </div>
                <button type="submit" className='w-[100%] bg-black text-white rounded-[5px] py-[5px] font-medium mt-[36px] cursor-pointer transition duration-700
                  hover:bg-[#3A3A3A]'>Sign in</button>
              </form>

              <p className='mt-[28px] text-[16px] underline font-medium cursor-pointer'>Forgot password?</p>
              <p className='mt-[36px] text-[16px] text-center'>
                Don't have an account? <br className='hidden max-sm:block' />
                <Link to="/signup" className='underline font-bold cursor-pointer'>Sign up for free</Link>
              </p>
            </div>

            <Link to="/" className='ml-90 my-5 max-sm:ml-50'>
              <div className='flex flex-row items-center float-right cursor-pointer
                sm:max-md:w-[100%]'>
                <FaArrowLeft className='mr-[5px] text-sm' />
                <p className='text-[20px] font-medium mx-auto'>Back</p>
              </div>
            </Link>
          </section>
        </div>
      </div>
    </>
  )
}

export default SignInPage;
