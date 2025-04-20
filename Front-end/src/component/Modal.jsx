import React from 'react'
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { MdFormatUnderlined } from "react-icons/md";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa6";
import { FaAlignRight } from "react-icons/fa";
<<<<<<< Updated upstream

const Modal = () => {
  return (
    <>
    <div className='fixed inset-0 bg-[rgba(0,0,0,0.50)] flex justify-center items-center'>
        <div className=''>
            <div className='flex flex-col items-center'>
                <div className='w-200'>
                    <input type="text" placeholder='Type your topic' className='bg-white px-2 py-2 w-[100%] text-[24px] rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'/>
=======
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


const Modal = () => {

    const [fontSize, setFontSize] = useState();
    const [textColor, setTextColor] = useState();
    const [topic, setTopic] = useState(saveTopic);
    const [textareaValue, setTextareaValue] = useState(saveTextareaValue);

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
    <div id='container-diary' className='fixed inset-0 z-40 bg-[rgba(0,0,0,0.50)] flex justify-center items-center'>
        <div>
            <div className='flex flex-col items-center'>
                <div className='w-200'>
                    <input type="text" id='topicInput' value={topic} onChange={(e) => setTopic(e.target.value)} placeholder='Type your topic' className='bg-white px-2 py-2 w-[100%] text-[24px] rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'/>
>>>>>>> Stashed changes
                </div>
                <div className='flex justify-evenly items-center text-[20px] w-150 mt-5 bg-white py-2 rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'>
                    <div className='flex items-center'>
                        <input type="number" className='w-10 border-1'/>
                    </div>
                    <div className='h-7 w-[2px] bg-black'></div>
                    <div className='flex justify-evenly items-center w-35'>
<<<<<<< Updated upstream
                        <button><FaBold /></button>
                        <button><FaItalic /></button>
                        <button className='text-[24px]'><MdFormatUnderlined /></button>
                    </div>
                    <div className='h-7 w-[2px] bg-black'></div>
                    <div className='flex justify-evenly items-center w-35'>
                        <button><FaAlignLeft /></button>
                        <button><FaAlignCenter /></button>
                        <button><FaAlignRight /></button>
=======
                        <button type="button" onClick={makeTextBold} className='hover:bg-gray-300 p-1'><FaBold /></button>
                        <button type="button" onClick={makeTextItalic} className='hover:bg-gray-300 p-1'><FaItalic /></button>
                        <button type="button" onClick={makeTextUnderline} className='text-[24px] hover:bg-gray-300 p-1'><MdFormatUnderlined /></button>
                    </div>
                    <div className='h-7 w-[2px] bg-black'></div>
                    <div className='flex justify-evenly items-center w-35'>
                        <button type="button" onClick={textAlignLeft} className='hover:bg-gray-300 p-1'><FaAlignLeft /></button>
                        <button type="button" onClick={textAlignCenter} className='hover:bg-gray-300 p-1'><FaAlignCenter /></button>
                        <button type="button" onClick={textAlignRight} className='hover:bg-gray-300 p-1'><FaAlignRight /></button>
>>>>>>> Stashed changes
                    </div>
                    <div className='h-7 w-[2px] bg-black'></div>
                    <div className='flex justify-evenly items-center w-35'>
                        <input type="color" />
                    </div>
                </div>
                <div className='w-200'>
<<<<<<< Updated upstream
                    <textarea name="" id="" placeholder='Tyoe your text'  className='bg-white px-2 py-2 mt-5 w-[100%] h-50 text-[24px] rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'></textarea>
=======
                    <textarea name="" id="textarea" value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} placeholder='Type your text'  className='bg-white px-2 py-2 mt-5 w-[100%] h-75 text-[16px] resize-none rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'></textarea>
>>>>>>> Stashed changes
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Modal