import React from 'react'
import { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import Modal from './Modal';

const AddDiary = () => {
    const [showModal, setModal] = useState(false);

  return (
    <>
    <div className='flex justify-end'>
        <button onClick={() => {setModal(true)}} className='flex items-center mt-5 mr-15 text-[24px] font-medium bg-white px-3 py-1 rounded-lg drop-shadow-[0_5px_7px_rgba(0,0,0,0.25)] cursor-pointer'><IoIosAdd />Add</button>
    </div>
    <div>
        {showModal && <Modal></Modal>}
    </div>
    </>
  )
}

export default AddDiary