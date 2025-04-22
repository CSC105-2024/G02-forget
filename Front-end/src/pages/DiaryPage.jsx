import React from 'react'
import Navbar from '../component/Navbar'
import AddDiary from '../component/AddDiary'


const DiaryPage = () => {
  return (
    <>
    <div className='max-sm:flex max-sm:flex-col-reverse'>
      <Navbar> </Navbar>
      <div className='Background h-auto min-h-screen
      max-sm:h-100'>
        <AddDiary></AddDiary>
      </div>
    </div>
    </>
  )
}

export default DiaryPage