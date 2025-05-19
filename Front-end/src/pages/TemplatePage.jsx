import React from 'react'
import Navbar from '../component/Navbar'
import Pic1 from '../img/NoDiary.png'
import ChangeBackground from "../component/ChangeTemplate.jsx";
// import TemplateExample from '../component/TemplateExample.jsx';

const Template = () => {
  return (
    <>
    <div className='flex flex-col-reverse lg:flex-col'>
      <div className='h-0'>
      <Navbar></Navbar>
      </div>
    <div class="Background">
      <div className='flex justify-center h-screen lg:items-center'>
        <div className="w-[100%] mx-auto
              md:max-lg:w-[100%] 
              sm:max-md:w-[100%]
              max-sm:w-[100%]"
              >
          <section className='flex justify-evenly items-center h-[90%] p-2 bg-white rounded-[10px] drop-shadow-xl
                              max-sm:flex-col-reverse w-[98%] ml-[1%] mt-2 lg:p-[12px] rounded-[10px] max-sm:h-[600px] 
                              lg:w-[90%] lg:h-[700px] lg:ml-[5%] lg:mr-[5%]'>

              <ChangeBackground />


            </section>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Template