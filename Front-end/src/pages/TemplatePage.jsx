import React from 'react'
import Navbar from '../component/Navbar'
import Pic1 from '../img/NoDiary.png'

const Template = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='flex items-center justify-center bg-[#ECECEC] h-screen'>
      <div className="w-[1800px] mx-auto 
            md:max-lg:w-[90%] 
            sm:max-md:w-[90%]
            max-sm:w-[90%]">

            <section className='flex justify-evenly items-center h-[800px] p-[12px] bg-[#FFFFFF] rounded-[10px] drop-shadow-xl rounded-[10px]
            max-sm:flex-col-reverse max-sm:h-[600px] w-[90%] ml-[5%]'>

              <div className="flex-row gap-5">

                <div className="flex bg-[#D9D9D9] h-[100px] w-[300px] rounded-[10px] mb-15 border-1">
                </div>
                <div className="flex bg-[#FFBBBB] h-[100px] w-[300px] rounded-[10px] mb-15">
                </div>
                <div className="flex bg-[#FFDD78] h-[100px] w-[300px] rounded-[10px] mb-15">
                </div>
                <div className="flex bg-[#FFBB77] h-[100px] w-[300px] rounded-[10px] mb-15">
                </div>

              </div>

              <div className="flex flex-col items-center justify-center">

                <div className="flex w-[600px] h-[475px] rounded-[3px] border-1 mb-10">
                <img src={Pic1}></img>
                </div>
                <div className="flex w-[200px] h-[40px] bg-[#F2F2F2] rounded-[20px] border-1 items-center justify-between ">
                  <div className="h-[20px] w-[20px] bg-[#000000] rounded-[50%] border-1 ml-3">
                  </div>
                  <div className="h-[20px] w-[20px] bg-[#FFFFFF] rounded-[50%] border-1">
                  </div>
                  <div className="h-[20px] w-[20px] bg-[#FFFFFF] rounded-[50%] border-1 mr-3">
                  </div>
                </div>

              </div>

            </section>
      </div>
    </div>
    </>
  )
}

export default Template