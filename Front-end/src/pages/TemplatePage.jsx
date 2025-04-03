import React from 'react'
import Navbar from '../component/Navbar'
import Pic1 from '../img/NoDiary.png'
import ChangeBackground from "../component/ChangeTemplate.jsx";
import TemplateExample from '../component/TemplateExample.jsx';

const Template = () => {
  return (
    <>
    <Navbar></Navbar>
    <div class="Background">
      <div className='flex items-center justify-center h-screen'>
        <div className="w-[1800px] mx-auto 
              md:max-lg:w-[100%] 
              sm:max-md:w-[100%]
              max-sm:w-[100%]"
              >

          <section className='flex justify-evenly items-center h-[800px] p-[12px] bg-[#FFFFFF] rounded-[10px] drop-shadow-xl rounded-[10px]
              max-sm:flex-col-reverse max-sm:h-[600px] w-[90%] ml-[5%]'>

              <ChangeBackground />

              <div className="flex flex-col items-center justify-center">

                <div className="flex w-[600px] h-[475px] rounded-[3px] border-1 mb-10">
                  <img src={Pic1}></img>
                </div>

                <TemplateExample />
                
                </div>

            </section>
        </div>
      </div>
    </div>
    </>
  )
}

export default Template