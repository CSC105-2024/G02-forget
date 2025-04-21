import React, { useState } from 'react'
// Icon image
import EditIcon from '../img/EditIcon.png';
import LockIcon from '../img/LockIcon.png';
import UnlockIcon from '../img/UnlockIcon.png';
import BinIcon from '../img/BinIcon.png';

const DiaryEntry = ({diary, toggleLock, deleteDiary, handleDiary, topic, textareaValue, emoji, lock}) => {
    
  return (
    <>
    <div id="list-diary" className="flex justify-evenly items-center w-[1000px] h-[400px] bg-[#F6F6F6] mb-15 drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]">
        <div>
            <h2 id="day" className='text-[56px] font-medium'>Day 1</h2>
        </div>
        <div>
            <h3 id="topic" className='text-[48px] font-medium'>{topic}</h3>
            <textarea name="" id="text" className='bg-white p-[5px] w-175 h-50 text-[16px] resize-none rounded-lg' readOnly>{textareaValue}</textarea>
            <div id="container-icon" className='flex justify-between mt-[10px]'>
                <div id="icon1" className='flex flex-row'>
                    <button onClick={() => {handleDiary(diary)}}><img id="edit" src={EditIcon} alt="" className='w-[75px] bg-white rounded-[10%] mr-[20px] cursor-pointer drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'/></button>
                    <button onClick={() => toggleLock(diary.id)}>{!lock && <img id="unlock" src={UnlockIcon} alt="" className='w-[40px] p-[5px] bg-black rounded-[100%] cursor-pointer drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'/>}
                    {lock && <img id="lock" src={LockIcon} alt="" className='w-[40px] p-[5px] bg-white rounded-[100%] cursor-pointer drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'/>}
                    </button>
                </div>
                <div id="icon2">
                    <button type="button" onClick={() => !lock&&deleteDiary(diary.id)}><img id="bin" src={BinIcon} alt="" className='w-[40px] p-[5px] bg-black rounded-[100%] cursor-pointer drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'/></button>
                </div>
            </div>
        </div>
        <div id="container-mood" className='flex justify-center items-center bg-white border-[4px] border-[#b8b8b8] rounded-[100%] w-[100px] h-[100px] -ml-[100px] mb-[175px]'>
            <img src={emoji} alt=""/>
        </div>
    </div>
    </>
  )
}

export default DiaryEntry
