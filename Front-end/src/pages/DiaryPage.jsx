import React from 'react'
import Navbar from '../component/Navbar'
import AddDiary from '../component/AddDiary'


const DiaryPage = () => {
  return (
    <>
    <div className='flex flex-col-reverse lg:flex-col'><Navbar></Navbar>
    <div className='flex flex-col-reverse Background h-auto min-h-screen md:flex-col'>
        <AddDiary></AddDiary>
        
    </div></div>
    
    </>
  )
}

export default DiaryPage