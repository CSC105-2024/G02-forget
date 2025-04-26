import React from 'react'
import { useState } from 'react'
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
// Emoji image
import RedEmoji from '../img/RedEmoji.png'
import OrangeEmoji from '../img/OrangeEmoji.png'
import YellowEmoji from '../img/YellowEmoji.png'
import LightGreenEmoji from '../img/LightGreenEmoji.png'
import GreenEmoji from '../img/GreenEmoji.png'
import Emptybox from '../img/EmptyBox.png'

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
    const [showDiary, setShowDiary] = useState(false);
    const [showModal, setModal] = useState(false);
    const [showMood, setMood] = useState(false);
    const [emoji, setEmoji] = useState();
    const [createNewDiary, setCreateNewDiary] = useState(true);
    const [currentId, setCurrentId] = useState()

    const toggleLock = (id) => {
      setDiaries(prev =>
        prev.map(diary =>
          diary.id === id ? { ...diary, lock: !diary.lock } : diary
        )
      );
    };

    const deleteDiary = (id) => {
      setDiaries((prev) => prev.filter((diary) => diary.id !== id || diary.lock));
      if (diaries.length === 1 || diaries.length === 0) {
        setShowMessage(true);
        setShowDiary(false);
      }
    };

    const handleDiary = (diary) => {
      setCurrentId(diary.id);
      setSaveTopic(diary.topic);
      setSaveTextareaValue(diary.text);
      setSelectMood(diary.emoji)
      console.log(`handle: ${diary.text}`);
      console.log(`handle: ${diary.emoji}`);
      
      setCreateNewDiary(false);
      setModal(true);
      
    }

    const editDiary = () => {
      console.log(`before edit: ${textareaValue}`);
      
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
      console.log(`after edit: ${textareaValue}`);
      setSaveTopic("");
      setSaveTextareaValue("");
      setSelectMood("");
      setMood(false);
      setModal(false);
    };
    
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
        }

        setShowDiary(true);
        setShowMessage(false)
        
        setSaveTopic("");
        setSaveTextareaValue("");
        setSelectMood("");
        console.log(day.getDate());
        
      }
      
    }

  return (
    <>
    <div className ='flex flex-col justify-center h-screen'>
    <div className='flex justify-between items-center mb-10 '>
      <div className='flex SecondaryBackground items-center gap-10 mt-5 ml-15 px-4 bg-[#F6F6F6] rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'>
      <MdNavigateBefore className='text-[24px] text-white bg-black rounded-2xl cursor-pointer'/>
        <div className='text-center'>
            <h2 className='text-[56px] font-medium'>Month</h2>
            <p className='text-[24px] -mt-6'>2025</p>
        </div>
        <div className='addButton lg:hidden'>
          <button onClick={() => {setModal(true);setCreateNewDiary(true)}} className='
          flex SecondaryBackground items-center mt-5 mr-15 text-[24px] font-medium bg-white 
          px-3 py-1 rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)] cursor-pointer'><IoIosAdd />Add</button>
      </div>
      <MdNavigateNext className='text-[24px] text-white bg-black rounded-2xl cursor-pointer'/>
      </div>
      <div className='addButton hidden lg:block'>
          <button onClick={() => {setModal(true);setCreateNewDiary(true)}} className='
          flex SecondaryBackground items-center mt-5 mr-15 text-[24px] font-medium bg-white 
          px-3 py-1 rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)] cursor-pointer'><IoIosAdd />Add</button>
      </div>
    </div>
    </div>
    <div className='float-right relative left-[80%] top-100'>
        {showModal && <Modal></Modal>}
        {showModal && <button className='fixed z-40 bg-white rounded-xl text-[24px] cursor-pointer' onClick={nextModal}><MdNavigateNext /></button>}
        {showModal && <button className='fixed z-40 right-50 top-15 text-white text-[48px] cursor-pointer' onClick={exit}><RxCross2 /></button>}
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
    <div id='container' className='flex Background flex-col items-center bg-[#ECECEC]'>
      {showMessage && <h1 id='message-no-diary' className='text-[64px] text-center text-[#5f5f5f]'>No Diary In This Month</h1>}
      {showMessage && <img src={Emptybox}></img>}
      {showDiary && diaries.map(diary => (
        <DiaryEntry
        key={diary.id}
        diary={diary}
        toggleLock={toggleLock}
        deleteDiary={deleteDiary}
        editDiary={editDiary}
        handleDiary={handleDiary}
        day={diary.day}
        topic={diary.topic}
        textareaValue={diary.text}
        emoji={diary.emoji}
        lock={diary.lock}
        ></DiaryEntry>
      ))}
    </div>
    <button onClick={() => console.log(diaries)
    }></button>
    </>
  )
}

export default AddDiary