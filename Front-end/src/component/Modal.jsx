import React from 'react'
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { MdFormatUnderlined } from "react-icons/md";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa6";
import { FaAlignRight } from "react-icons/fa";

const Modal = () => {
  return (
    <>
    <div className='fixed inset-0 bg-[rgba(0,0,0,0.50)] flex justify-center items-center'>
        <div className=''>
            <div className='flex flex-col items-center'>
                <div className='w-200'>
                    <input type="text" placeholder='Type your topic' className='bg-white px-2 py-2 w-[100%] text-[24px] rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'/>
                </div>
                <div className='flex justify-evenly items-center text-[20px] w-150 mt-5 bg-white py-2 rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'>
                    <div className='flex items-center'>
                        <input type="number" className='w-10 border-1'/>
                    </div>
                    <div className='h-7 w-[2px] bg-black'></div>
                    <div className='flex justify-evenly items-center w-35'>
                        <button><FaBold /></button>
                        <button><FaItalic /></button>
                        <button className='text-[24px]'><MdFormatUnderlined /></button>
                    </div>
                    <div className='h-7 w-[2px] bg-black'></div>
                    <div className='flex justify-evenly items-center w-35'>
                        <button><FaAlignLeft /></button>
                        <button><FaAlignCenter /></button>
                        <button><FaAlignRight /></button>
                    </div>
                    <div className='h-7 w-[2px] bg-black'></div>
                    <div className='flex justify-evenly items-center w-35'>
                        <input type="color" />
                    </div>
                </div>
                <div className='w-200'>
                    <textarea name="" id="" placeholder='Tyoe your text'  className='bg-white px-2 py-2 mt-5 w-[100%] h-50 text-[24px] rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'></textarea>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Modal