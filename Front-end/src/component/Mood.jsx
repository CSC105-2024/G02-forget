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
        red.style.opacity = "100%";

        orange.style.opacity = "50%";
        yellow.style.opacity = "50%";
        lightGreen.style.opacity = "50%";
        green.style.opacity = "50%";
        
        setSelectMood("red");
    }

    function selectOrange() {
        let red = document.getElementById("red");
        let orange = document.getElementById("orange");
        let yellow = document.getElementById("yellow");
        let lightGreen = document.getElementById("lightGreen");
        let green = document.getElementById("green");
        orange.style.opacity = "100%";

        red.style.opacity = "50%";
        yellow.style.opacity = "50%";
        lightGreen.style.opacity = "50%";
        green.style.opacity = "50%";

        setSelectMood("orange");
    }

    function selectYellow() {
        let red = document.getElementById("red");
        let orange = document.getElementById("orange");
        let yellow = document.getElementById("yellow");
        let lightGreen = document.getElementById("lightGreen");
        let green = document.getElementById("green");
        yellow.style.opacity = "100%";

        red.style.opacity = "50%";
        orange.style.opacity = "50%";
        lightGreen.style.opacity = "50%";
        green.style.opacity = "50%";

        setSelectMood("yellow");
    }

    function selectLightGreen() {
        let red = document.getElementById("red");
        let orange = document.getElementById("orange");
        let yellow = document.getElementById("yellow");
        let lightGreen = document.getElementById("lightGreen");
        let green = document.getElementById("green");
        lightGreen.style.opacity = "100%"

        red.style.opacity = "50%";
        orange.style.opacity = "50%";
        yellow.style.opacity = "50%";
        green.style.opacity = "50%";

        setSelectMood("lightGreen");
    }

    function selectGreen() {
        let red = document.getElementById("red");
        let orange = document.getElementById("orange");
        let yellow = document.getElementById("yellow");
        let lightGreen = document.getElementById("lightGreen");
        let green = document.getElementById("green");
        green.style.opacity = "100%"

        red.style.opacity = "50%";
        orange.style.opacity = "50%";
        yellow.style.opacity = "50%";
        lightGreen.style.opacity = "50%";

        setSelectMood("green");
    }

  return (
    <>
    <div id='container-diary' className='fixed inset-0 z-40 bg-[rgba(0,0,0,0.50)] flex justify-center items-center'>
        <div>
            <div className='flex flex-col items-center'>
                <div className='flex justify-center w-200 max-sm:w-135 '>
                    <h2 className='bg-white px-2 py-2 text-[56px] text-center w-[50%] text-[24px] font-medium rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)] max-sm:text-[36px] '>Rate Your Mood</h2>
                </div>
                <div className='w-225 h-75 flex flex-col justify-evenly items-center bg-white px-2 py-2 mt-5 text-center rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)] max-sm:flex-row max-sm:justify-evenly max-sm:w-100 max-sm:h-115 '>
                    <div>
                        <p className='text-[32px] font-medium max-sm:hidden'>Worst &lt;--------------------------&gt; Best </p>
                        <p className='hidden max-sm:block text-[24px] font-medium'>
                            Worst <br />
                            ↑ <br />
                            | <br />
                            | <br />
                            | <br />
                            | <br />
                            | <br />
                            | <br />
                            | <br />
                            | <br />
                            ↓ <br />
                            Best
                        </p>
                    </div>
                    <div className='flex justify-center items-center max-sm:flex-col max-sm:w-25 '>
                        <img id='red' src={RedEmoji} alt="" onClick={selectRed} className='cursor-pointer opacity-50'/>
                        <img id='orange' src={OrangeEmoji} onClick={selectOrange} alt="" className='cursor-pointer opacity-50'/>
                        <img id='yellow' src={YellowEmoji} onClick={selectYellow} alt="" className='cursor-pointer opacity-50'/>
                        <img id='lightGreen' src={LightGreenEmoji} onClick={selectLightGreen} alt="" className='cursor-pointer opacity-50'/>
                        <img id='green' src={GreenEmoji} onClick={selectGreen} alt="" className='cursor-pointer opacity-50'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Mood