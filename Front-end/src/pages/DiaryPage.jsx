import React from 'react'
import Navbar from '../component/Navbar'
import AddDiary from '../component/AddDiary'


const DiaryPage = () => {
  return (
    <>
    <Navbar> </Navbar>
    <div className='Background h-auto min-h-screen'>
        <AddDiary></AddDiary>
        
    </div>
    </>
  )
}

export default DiaryPage