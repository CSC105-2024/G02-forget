import React from 'react'
import { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import Modal from './Modal';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import Mood from './Mood';
// Import Value
import { topic, setTopicForAddDiary, textareaValue, setTextareaValueForAddDiary } from './Modal';
import { selectMood } from './Mood';
// Icon image
import EditIcon from '../img/EditIcon.png';
import UnlockIcon from '../img/UnlockIcon.png';
import BinIcon from '../img/BinIcon.png'
// Emoji image
import RedEmoji from '../img/RedEmoji.png'
import OrangeEmoji from '../img/OrangeEmoji.png'
import YellowEmoji from '../img/YellowEmoji.png'
import LightGreenEmoji from '../img/LightGreenEmoji.png'
import GreenEmoji from '../img/GreenEmoji.png'
import Emptybox from '../img/EmptyBox.png'
// Zod


const AddDiary = () => {
    const [diaries, setDiaries] = useState([]);
    const [showMessage, setShowMessage] = useState(true);
    const [showDiary, setShowDiary] = useState(false);
    const [showModal, setModal] = useState(false);
    const [showMood, setMood] = useState(false);

    function nextModal() {
      setMood(true);
      setModal(false);
    }

    function prevtModal() {
      setMood(false);
      setModal(true);
    }

    function createDiary() {
      if (selectMood == "") {
        alert("Please rate your mood");
      } else {
        setMood(false);
        setModal(false);
        document.getElementById("message-no-diary").style.display = "none";
        let container = document.createElement("div");
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.style.height = "500px";

        let emoji = "";

        if (selectMood == "red") {
            emoji = RedEmoji;
        } else if (selectMood == "orange") {
            emoji = OrangeEmoji;
        } else if (selectMood == "yellow") {
            emoji = YellowEmoji;
        } else if (selectMood == "lightGreen") {
            emoji = LightGreenEmoji;
        } else if (selectMood == "green") {
            emoji = GreenEmoji;
        }

        if (typeof(topic) == "undefined") {
          setTopicForAddDiary("-");
        }

        if (typeof(textareaValue) == "undefined") {
          setTextareaValueForAddDiary("");
        }

        container.innerHTML = 
        `
        <div id="list-diary">
          <div>
              <h2 id="day" className='text-[56px] font-medium'>Day 1</h2>
          </div>
          <div>
            <h3 id="topic" className='text-[48px] font-medium'>${topic}</h3>
            <textarea name="" id="text" className='bg-white px-2 py-2 w-175 h-50 text-[16px] resize-none rounded-lg' readOnly>${textareaValue}</textarea>
            <div id="container-icon" className='flex justify-between mt-3'>
              <div id="icon1" className='flex flex-row'>
                <button><img id="edit" src=${EditIcon} alt="" style="width:75px;"/></button>
                <button><img id="unlock" src=${UnlockIcon} alt="" style="width:40px;"/></button>
              </div>
              <div id="icon2">
                <button><img id="bin" src=${BinIcon} alt="" style="width:40px;"/></button>
              </div>
            </div>
          </div>
          <div id="container-mood">
              <img src=${emoji} alt=""/>
          <div/>
        </div>
      `;
        document.getElementById("container").appendChild(container);
      }
    }

  return (
    <>
    <div className='flex justify-between items-center mb-10'>
      <div className='SecondaryBackground flex items-center gap-10 mt-5 ml-15 px-4 rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'>
      <MdNavigateBefore className='text-[24px] text-white bg-black rounded-2xl cursor-pointer'/>
        <div className='text-center'>
            <h2 className='text-[56px] font-medium'>Month</h2>
            <p className='text-[24px] -mt-6'>2025</p>
        </div>
      <MdNavigateNext className='text-[24px] text-white bg-black rounded-2xl cursor-pointer'/>
      </div>
      <div className=''>
          <button onClick={() => {setModal(true)}} className='flex items-center mt-5 mr-15 text-[24px] font-medium bg-white px-3 py-1 rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)] cursor-pointer'><IoIosAdd />Add</button>
      </div>
    </div>
    <div className='float-right relative right-95 top-100'>
      <form action="">
          {showModal && <Modal></Modal>}
          {showModal && <button type='submit' className='fixed bg-white rounded-xl text-[24px]' onClick={nextModal}><MdNavigateNext /></button>}
        </form>
    </div>
    <div className=''>
       {showMood && <Mood></Mood>}
       <div className='float-right relative right-110 top-100'>
        {showMood && <button className='fixed bg-white rounded-xl text-[24px]' onClick={prevtModal}><MdNavigateBefore /></button>}
       </div>
       <div className='float-right relative right-95 top-100'>
        {showMood && <button className='fixed bg-white rounded-xl text-[24px]' onClick={createDiary}><IoMdCheckmark /></button>}
       </div>
    </div>
    <div id='container'>
      <h1 id='message-no-diary' className='flex flex-col items-center text-[64px] text-center text-[#5f5f5f]'>No Diary In This Month
        <img src={Emptybox}>
        </img>
      </h1>
    </div>
    <div className=''>
       {showMood && <Mood></Mood>}
       <div className='float-right relative right-110 top-100'>
        {showMood && <button className='fixed z-40 bg-white rounded-xl text-[24px]' onClick={prevtModal}><MdNavigateBefore /></button>}
       </div>
       <div className='float-right relative right-95 top-100'>
        {showMood && <button className='fixed z-40 bg-white rounded-xl text-[24px]' onClick={createNewDiary ? createDiary : editDiary}><IoMdCheckmark /></button>}
        {showMood && <button className='fixed z-40 right-50 top-15 text-white text-[48px] cursor-pointer' onClick={exit}><RxCross2 /></button>}
       </div>
    </div>
    <div id='container' className='flex flex-col items-center bg-[#ECECEC]'>
      {showMessage && <h1 id='message-no-diary' className='text-[64px] text-center text-[#5f5f5f]'>No Diary In This Month</h1>}
      {showDiary && diaries.map(diary => (
        <DiaryEntry
        key={diary.id}
        diary={diary}
        toggleLock={toggleLock}
        deleteDiary={deleteDiary}
        editDiary={editDiary}
        handleDiary={handleDiary}
        topic={diary.topic}
        textareaValue={diary.text}
        emoji={diary.emoji}
        lock={diary.lock}
        ></DiaryEntry>
      ))}
    </div>
    <button onClick={() => console.log(diaries)
    }>check</button>
    </>
  )
}

export default AddDiary