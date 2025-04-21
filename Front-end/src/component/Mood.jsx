import React from 'react'
import { useState } from 'react'
import RedEmoji from '../img/RedEmoji.png'
import OrangeEmoji from '../img/OrangeEmoji.png'
import YellowEmoji from '../img/YellowEmoji.png'
import LightGreenEmoji from '../img/LightGreenEmoji.png'
import GreenEmoji from '../img/GreenEmoji.png'

export let selectMood = "";
export const setSelectMood = (newMood) => {
    selectMood = newMood;
};

const Mood = () => {

    function selectRed() {
        let red = document.getElementById("red");
        let orange = document.getElementById("orange");
        let yellow = document.getElementById("yellow");
        let lightGreen = document.getElementById("lightGreen");
        let green = document.getElementById("green");
        red.style.border = "medium solid rgb(0, 0, 0)";
        red.style.borderRadius = "100%"

        orange.style.borderStyle = "none";
        yellow.style.borderStyle = "none";
        lightGreen.style.borderStyle = "none";
        green.style.borderStyle = "none";
        
        setSelectMood("red");
    }

    function selectOrange() {
        let red = document.getElementById("red");
        let orange = document.getElementById("orange");
        let yellow = document.getElementById("yellow");
        let lightGreen = document.getElementById("lightGreen");
        let green = document.getElementById("green");
        orange.style.border = "medium solid rgb(0, 0, 0)";
        orange.style.borderRadius = "100%"

        red.style.borderStyle = "none";
        yellow.style.borderStyle = "none";
        lightGreen.style.borderStyle = "none";
        green.style.borderStyle = "none";

        setSelectMood("orange");
    }

    function selectYellow() {
        let red = document.getElementById("red");
        let orange = document.getElementById("orange");
        let yellow = document.getElementById("yellow");
        let lightGreen = document.getElementById("lightGreen");
        let green = document.getElementById("green");
        yellow.style.border = "medium solid rgb(0, 0, 0)";
        yellow.style.borderRadius = "100%"

        red.style.borderStyle = "none";
        orange.style.borderStyle = "none";
        lightGreen.style.borderStyle = "none";
        green.style.borderStyle = "none";

        setSelectMood("yellow");
    }

    function selectLightGreen() {
        let red = document.getElementById("red");
        let orange = document.getElementById("orange");
        let yellow = document.getElementById("yellow");
        let lightGreen = document.getElementById("lightGreen");
        let green = document.getElementById("green");
        lightGreen.style.border = "medium solid rgb(0, 0, 0)";
        lightGreen.style.borderRadius = "100%"

        red.style.borderStyle = "none";
        orange.style.borderStyle = "none";
        yellow.style.borderStyle = "none";
        green.style.borderStyle = "none";

        setSelectMood("lightGreen");
    }

    function selectGreen() {
        let red = document.getElementById("red");
        let orange = document.getElementById("orange");
        let yellow = document.getElementById("yellow");
        let lightGreen = document.getElementById("lightGreen");
        let green = document.getElementById("green");
        green.style.border = "medium solid rgb(0, 0, 0)";
        green.style.borderRadius = "100%"

        red.style.borderStyle = "none";
        orange.style.borderStyle = "none";
        yellow.style.borderStyle = "none";
        lightGreen.style.borderStyle = "none";

        setSelectMood("green");
    }

  return (
    <>
    <div id='container-diary' className='fixed inset-0 bg-[rgba(0,0,0,0.50)] flex justify-center items-center'>
        <div>
            <div className='flex flex-col items-center'>
                <div className='flex justify-center w-200'>
                    <h2 className='bg-white px-2 py-2 text-[56px] text-center w-[50%] text-[24px] font-medium rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'>Rate Your Mood</h2>
                </div>
                <div className='w-225 h-75 flex flex-col justify-evenly items-center bg-white px-2 py-2 mt-5 text-center rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)]'>
                    <div>
                        <p className='text-[32px] font-medium'>Worst &lt;--------------------------&gt; Best </p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img id='red' src={RedEmoji} alt="" onClick={selectRed} className='cursor-pointer'/>
                        <img id='orange' src={OrangeEmoji} onClick={selectOrange} alt="" className='cursor-pointer'/>
                        <img id='yellow' src={YellowEmoji} onClick={selectYellow} alt="" className='cursor-pointer'/>
                        <img id='lightGreen' src={LightGreenEmoji} onClick={selectLightGreen} alt="" className='cursor-pointer'/>
                        <img id='green' src={GreenEmoji} onClick={selectGreen} alt="" className='cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Mood