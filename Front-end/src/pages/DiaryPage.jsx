import React from 'react'
import Navbar from '../component/Navbar'
import AddDiary from '../component/AddDiary'


const DiaryPage = () => {
  return (
    <>
    <div className='flex flex-col-reverse lg:flex-col'>
      <nav className='h-0'>
      <Navbar></Navbar>
      </nav>
      <div className='Background h-auto h-screen'>
        <div className='flex h-screen flex-col-reverse justify-start 
        lg:flex-col
        lg:mt-[100px]'>
        <AddDiary></AddDiary>
        </div>
      </div>
    </div>
    </>
  )
}

export default DiaryPage