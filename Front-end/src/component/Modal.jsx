import React from 'react'
import { useState } from 'react'
// React icons
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { MdFormatUnderlined } from "react-icons/md";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa6";
import { FaAlignRight } from "react-icons/fa";
// Import from AddDiray file
import { saveTopic, saveTextareaValue } from './AddDiary';

export let topic = "";
export const setTopicForAddDiary = (newTopic) => {
    topic = newTopic;
};

export let textareaValue = "";
export const setTextareaValueForAddDiary = (newTextareaValue) => {
    textareaValue = newTextareaValue;
};



export let topic = "";
export const setTopicForAddDiary = (newTopic) => {
    topic = newTopic;
};

export let textareaValue = "";
export const setTextareaValueForAddDiary = (newTextareaValue) => {
    textareaValue = newTextareaValue;
};

const Modal = () => {

    const [fontSize, setFontSize] = useState();
    const [textColor, setTextColor] = useState();
    const [topic, setTopic] = useState();
    const [textareaValue, setTextareaValue] = useState();

    setTopicForAddDiary(topic);
    setTextareaValueForAddDiary(textareaValue);

    // Text Editor
    let textarea = document.getElementById("textarea");
    function increaseFontSize() {
        textarea.style.fontSize = fontSize + "px";
    }
    
    function makeTextBold() {
        if (textarea.style.fontWeight == "bold") {
            textarea.style.fontWeight = "normal";
        } else {
            textarea.style.fontWeight = "bold";
        }
    }

    function makeTextItalic() {
        if (textarea.style.fontStyle == "normal") {
            textarea.style.fontStyle = "italic";
        } else {
            textarea.style.fontStyle = "normal";
        }
    }

    function makeTextUnderline() {
        if (textarea.style.textDecoration == "underline") {
            textarea.style.textDecoration= "none";
        } else {
            textarea.style.textDecoration = "underline";
        }
    }

    function textAlignLeft() {
        textarea.style.textAlign = "left";
    }

    function textAlignCenter() {
        textarea.style.textAlign = "center";
    }

    function textAlignRight() {
        textarea.style.textAlign = "right";
    }

    function changeColor() {
        textarea.style.color = textColor;
    }
    

  return (
    <>
    <div id='container-diary' className='fixed inset-0 bg-[rgba(0,0,0,0.50)] flex justify-center items-center'>
        <div>
            <div className='flex flex-col items-center'>
                <div className='w-200'>
                    <input type="text" required onChange={(e) => setTopic(e.target.value)} placeholder='Type your topic' className='bg-white px-2 py-2 w-[100%] text-[24px] rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'/>
                </div>
                <div className='flex justify-evenly items-center text-[20px] w-150 mt-5 bg-white py-2 rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'>
                    <div className='flex items-center'>
                        <input type="number" id='fontsize' min={16} max={100} onClick={increaseFontSize} onChange={(e) => setFontSize(e.target.value)} className='w-12 px-[2px] border-1'/>
                    </div>
                    <div className='h-7 w-[2px] bg-black'></div>
                    <div className='flex justify-evenly items-center w-35'>
                        <button onClick={makeTextBold} className='hover:bg-gray-300 p-1'><FaBold /></button>
                        <button onClick={makeTextItalic} className='hover:bg-gray-300 p-1'><FaItalic /></button>
                        <button onClick={makeTextUnderline} className='text-[24px] hover:bg-gray-300 p-1'><MdFormatUnderlined /></button>
                    </div>
                    <div className='h-7 w-[2px] bg-black'></div>
                    <div className='flex justify-evenly items-center w-35'>
                        <button onClick={textAlignLeft} className='hover:bg-gray-300 p-1'><FaAlignLeft /></button>
                        <button onClick={textAlignCenter} className='hover:bg-gray-300 p-1'><FaAlignCenter /></button>
                        <button onClick={textAlignRight} className='hover:bg-gray-300 p-1'><FaAlignRight /></button>
                    </div>
                    <div className='h-7 w-[2px] bg-black'></div>
                    <div className='flex justify-evenly items-center w-35'>
                        <input type="color" onClick={changeColor} onChange={(e) => setTextColor(e.target.value)}/>
                    </div>
                </div>
                <div className='w-200'>
                    <textarea name="" id="textarea" onChange={(e) => setTextareaValue(e.target.value)} placeholder='Type your text'  className='bg-white px-2 py-2 mt-5 w-[100%] h-75 text-[16px] resize-none rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'></textarea>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Modal