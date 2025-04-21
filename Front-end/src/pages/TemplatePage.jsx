import React from 'react'
import Navbar from '../component/Navbar'
import Pic1 from '../img/NoDiary.png'
import ChangeBackground from "../component/ChangeTemplate.jsx";
import TemplateExample from '../component/TemplateExample.jsx';

const Template = () => {
  return (
    <>
    <div className='flex flex-col-reverse lg:flex-col'><Navbar></Navbar>
    <div class="Background">
      <div className='flex justify-center h-screen lg:items-center'>
        <div className="w-[1800px] mx-auto 
              md:max-lg:w-[100%] 
              sm:max-md:w-[100%]
              max-sm:w-[100%]"
              >

          <section className='flex justify-evenly items-center h-[800px] p-2 bg-white rounded-[10px] drop-shadow-xl
                              max-sm:flex-col-reverse max-sm:h-[700px] w-[98%] ml-[1%] mt-2 lg:p-[12px] rounded-[10px] max-sm:h-[600px] w-[90%] lg:ml-[5%]'>

              <ChangeBackground />

              <div className="flex flex-col items-center justify-center">

                <div className="flex w-[300px] h-[400px] rounded-[3px] border-1 mb-10 lg:w-[600px] lg:h-[475px] lg:rounded-[3px] border-1 mb-10">
                  <img src={Pic1}></img>
                </div>

                <TemplateExample />
                
                </div>

            </section>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Template