import React from 'react'
import { useState, useEffect } from 'react'
import { IoIosAdd } from "react-icons/io";
import Modal from './Modal';
import DiaryEntry from './DiaryEntry';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Mood from './Mood';
// Import Value
import { topic, setTopicForAddDiary, textareaValue, setTextareaValueForAddDiary } from './Modal';
import { selectMood, setSelectMood } from './Mood';
import InvalidAdd from './InvalidAdd';
// Emoji image
import RedEmoji from '../img/RedEmoji.png';
import OrangeEmoji from '../img/OrangeEmoji.png';
import YellowEmoji from '../img/YellowEmoji.png';
import LightGreenEmoji from '../img/LightGreenEmoji.png';
import GreenEmoji from '../img/GreenEmoji.png';
import Emptybox from '../img/EmptyBox.png';

import * as apiDiary from '../api/diary';
import * as apiUser from '../api/user';

export let saveTopic = "";
export const setSaveTopic = (topic) => {
  saveTopic = topic;
};

export let saveTextareaValue = "";
export const setSaveTextareaValue = (textareaValue) => {
  saveTextareaValue = textareaValue;
};

const AddDiary = () => {
    const [diaries, setDiaries] = useState([]);
    const [showMessage, setShowMessage] = useState(true);
    const [showDiary, setShowDiary] = useState(true);
    const [showModal, setModal] = useState(false);
    const [showMood, setMood] = useState(false);
    const [emoji, setEmoji] = useState();
    const [createNewDiary, setCreateNewDiary] = useState(true);
    const [currentId, setCurrentId] = useState();
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [thisMonth, setThisMonth] = useState(0);
    const [showInvalidAdd, setShowInvalidAdd] = useState(false);
    

    // Backend
    const addDiary = async (day, month, topic, content, emoji, userId) => {
      await apiDiary.createDairy(day, month, topic, content, emoji, userId);
    }

    // getDiaryFromUser
	const fetchDiaryData = async (month, userId) => {
		const data = await apiUser.getDiaryFromUser(month, userId);
		if (data.success) {
			setDiaries(data.data.data);
      console.log(data.data.data);
      
      
		}
    
	};

  // lockDiary
  const lockDiary = async (id) => {
    await apiDiary.lockDiary(id);
  }

  // deleteDiary
  const removeDiary = async (id) => {
    await apiDiary.deleteDiary(id);
  }

  // editDiary
  const editDiaryData = async (id, topic, content, emoji) => {
    await apiDiary.editDiary(id, topic, content, emoji);
  }

	useEffect(() => {
		fetchDiaryData(currentMonth.toLocaleString('default', { month: 'long'}), 1);
    if (diaries.length > 0) {
      setShowDiary(true);
    } else {
      setShowDiary(false);
    }
	}, [currentMonth]);
    
    function prevMonth() {
      setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
      setThisMonth(thisMonth - 1);
    }

    function nextMonth() {
      setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
      setThisMonth(thisMonth + 1);
    }

    const toggleLock = (id) => {
      setDiaries(prev =>
        prev.map(diary =>
          diary.id === id ? { ...diary, lock: !diary.lock } : diary
        )
      );
      lockDiary(id);
    };

    const deleteDiary = (id) => {
      setDiaries((prev) => prev.filter((diary) => diary.id !== id || diary.lock));
      removeDiary(id);
      if (diaries.length === 1 || diaries.length === 0) {
        setShowMessage(true);
        setShowDiary(false);
      }
    };

    const handleDiary = (diary) => {
      setCurrentId(diary.id);
      setSaveTopic(diary.topic);
      setSaveTextareaValue(diary.content);
      setSelectMood(diary.emoji)
      console.log(`handle: ${diary.text}`);
      console.log(`handle: ${diary.emoji}`);
      
      setCreateNewDiary(false);
      setModal(true);
      
    }

    const editDiary = () => {
      
      let collectEmoji = "";

      if (selectMood == "red") {
          collectEmoji = RedEmoji;
          setEmoji(collectEmoji);
      } else if (selectMood == "orange") {
          collectEmoji = OrangeEmoji;;
          setEmoji(collectEmoji);
      } else if (selectMood == "yellow") {
          collectEmoji = YellowEmoji;
          setEmoji(collectEmoji);
      } else if (selectMood == "lightGreen") {
          collectEmoji = LightGreenEmoji;
          setEmoji(collectEmoji);
      } else if (selectMood == "green") {
          collectEmoji = GreenEmoji;
          setEmoji(collectEmoji);    
      } else if (collectEmoji == "") {
          collectEmoji = selectMood;
      }

      setDiaries(prev =>
        prev.map(diary =>
          diary.id === currentId ? { ...diary, topic: topic, text: textareaValue, emoji: collectEmoji} : diary
        )
      );
      editDiaryData(currentId, topic, textareaValue, collectEmoji);
      setSaveTopic("");
      setSaveTextareaValue("");
      setSelectMood("");
      setMood(false);
      setModal(false);

      window.location.reload();
    };

    const okay = () => {
      setShowInvalidAdd(false)
    }

    function add() {
      if (thisMonth === 0) {
        setModal(true);
        setCreateNewDiary(true)
      } else {
        setShowInvalidAdd(true);
      }
    }
    
    function exit() {
      setMood(false);
      setModal(false);
      setSaveTopic("");
      setSaveTextareaValue("");
      setSelectMood("");
      setMood(false);
      setModal(false);
    }

    function nextModal() {
      setMood(true);
      setModal(false);
      setSaveTopic(topic);
      setSaveTextareaValue(textareaValue);
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

        let collectEmoji = "";

        if (selectMood == "red") {
            collectEmoji = RedEmoji;
            setEmoji(collectEmoji);
        } else if (selectMood == "orange") {
            collectEmoji = OrangeEmoji;;
            setEmoji(collectEmoji);
        } else if (selectMood == "yellow") {
            collectEmoji = YellowEmoji;
            setEmoji(collectEmoji);
        } else if (selectMood == "lightGreen") {
            collectEmoji = LightGreenEmoji;
            setEmoji(collectEmoji);
        } else if (selectMood == "green") {
            collectEmoji = GreenEmoji;
            setEmoji(collectEmoji);    
        }

        if (topic == "") {
          setTopicForAddDiary("-");
        }

        if (typeof(textareaValue) == "undefined") {
          setTextareaValueForAddDiary("");
        }

        let day = new Date();

        if (createNewDiary) {
          let newDiary = {
            id: Date.now(),
            day: day.getDate(),
            topic: topic,
            text: textareaValue,
            emoji: collectEmoji,
            lock: false,
          }
          setDiaries(prev => [...prev, newDiary]);
          addDiary(newDiary.day, currentMonth.toLocaleString('default', { month: 'long'}), newDiary.topic, newDiary.text, newDiary.emoji, 1);
        }

        setShowDiary(true);
        setShowMessage(false)
        
        setSaveTopic("");
        setSaveTextareaValue("");
        setSelectMood("");
        fetchDiaryData(currentMonth.toLocaleString('default', { month: 'long'}), 1);
        window.location.reload();
      }
      
      
    }

  return (
    <>
    <div className ='flex flex-col lg:h-50'>

    <div className='flex z-40 mt-20 top-10 justify-between items-center hidden lg:flex'>
      
      <div className='flex SecondaryBackground fixed justify-between items-center w-100 h-25 mt-5 ml-15 px-4 bg-[#F6F6F6] rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'>
      <MdNavigateBefore onClick={() => prevMonth()} className='text-[24px] text-white bg-black rounded-2xl cursor-pointer'/>
        <div className='text-center'>
            <h2 className='text-[56px] font-medium'>
            {currentMonth.toLocaleString('default', { month: 'long'})}</h2>
            <p className='text-[24px] -mt-6'>
            {currentMonth.toLocaleString('default', {year: 'numeric' })}</p>
        </div>
      <MdNavigateNext onClick={() => nextMonth()} className='text-[24px] text-white bg-black rounded-2xl cursor-pointer'/>
      </div>

      <div className='flex addButton justify-end w-screen '>
          <button onClick={add} className='
          fixed flex SecondaryBackground items-center mt-5 mr-15 text-[24px] font-medium bg-white 
          px-3 py-1 rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)] cursor-pointer'><IoIosAdd />Add</button>
      </div>

    </div>

    </div>

    <div className='float-right absolute md:left-260 md:top-175 max-sm:left-90 max-sm:top-175'>
        {showModal && <Modal></Modal>}
        {showModal && <button className='fixed z-40 bg-white rounded-xl text-[24px] left-cursor-pointer' onClick={nextModal}><MdNavigateNext /></button>}
        {showModal && <button className='fixed z-40 right-50 top-35 text-white text-[48px] cursor-pointer max-sm:right-5 ' onClick={exit}><RxCross2 /></button>}
    </div>
    <div className=''>
       {showMood && <Mood></Mood>}
       <div className='float-right absolute md:right-80 md:top-175 max-sm:right-25 max-sm:top-190'>
        {showMood && <button className='fixed z-40 bg-white rounded-xl text-[24px]' onClick={prevtModal}><MdNavigateBefore /></button>}
       </div>
       <div className='float-right absolute md:right-70 md:top-175 max-sm:right-15 max-sm:top-190'>
        {showMood && <button className='fixed z-40 bg-white rounded-xl text-[24px]' onClick={createNewDiary ? createDiary : editDiary}><IoMdCheckmark /></button>}
        {showMood && <button className='fixed z-40 right-50 top-35 text-white text-[48px] cursor-pointer max-sm:right-5' onClick={exit}><RxCross2 /></button>}
       </div>
    </div>
    <div id='container' className='flex Background max-sm:mt-45 items-center bg-[#ECECEC] flex-col'>
      <div className='flex items-center flex-col'>
        {diaries.length <= 0 && <h1 id='message-no-diary' className='text-[64px] text-center text-[#5f5f5f] max-sm:text-[36px] '>No Diary In This Month</h1>}
        {diaries.length <= 0 && <img src={Emptybox} className='max-sm:w-30 '></img>}
      </div>
        {diaries.length > 0 && diaries.map(diary => (
          
          <DiaryEntry 
          key={diary.id}
          diary={diary}
          toggleLock={toggleLock}
          deleteDiary={deleteDiary}
          editDiary={editDiary}
          handleDiary={handleDiary}
          day={diary.day}
          topic={diary.topic}
          textareaValue={diary.content}
          emoji={diary.emoji}
          lock={diary.lock}
          ></DiaryEntry>
        
        ))} 
      <div className='flex fixed z-20 top-10 justify-between items-center mb-10 lg:hidden '>
        <div className='flex SecondaryBackground justify-between ml-80 items-center w-90 h-25 lg:mt-5 px-4 bg-[#F6F6F6] rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'>
        <MdNavigateBefore onClick={() => prevMonth()} className='text-[24px] text-white bg-black rounded-2xl cursor-pointer'/>
         <div className='text-center'>
              <h2 className='text-[56px] font-medium'>
              {currentMonth.toLocaleString('default', { month: 'long'})}</h2>
              <p className='text-[24px] -mt-6'>
              {currentMonth.toLocaleString('default', {year: 'numeric' })}</p>
          </div>
        <MdNavigateNext onClick={() => nextMonth()} className='text-[24px] text-white bg-black rounded-2xl cursor-pointer'/>
        </div>
        <div className='flex addButton ml-80 justify-end lg:hidden'>
          <button onClick={add} className='
          absolute top-190 fixed flex right-0 SecondaryBackground items-center mr-5 text-[24px] font-medium bg-white 
          px-3 py-1 rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)] cursor-pointer'><IoIosAdd />Add</button>
      </div>
    </div>
    </div>
    <button onClick={() => console.log(diaries)
    }></button>
    {showInvalidAdd && <InvalidAdd okay={okay}></InvalidAdd>}
    </>
  )
}

export default AddDiary