import React from 'react'
import { ImCross } from "react-icons/im";

const InvalidAccount = () => {
  return (
    <div id='container-diary' className='fixed inset-0 z-40 bg-[rgba(0,0,0,0.50)] flex justify-center items-center'>
        <div>
            <div className='w-100 h-100 bg-white flex flex-col justify-center items-center rounded-xl drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)] max-sm:w-100'>
              <ImCross className='text-[100px] text-red-600'/>
              <h1 className='text-[56px] text-red-600 font-medium'>Valid account</h1>
              <button className='text-[24px] font-medium bg-black text-white px-3 py-2 rounded-lg border-[2px] cursor-pointer hover:bg-white hover:text-black hover:drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)] max-sm:w-100'>OK</button>
            </div>
        </div>
    </div>
  )
}

export default InvalidAccount