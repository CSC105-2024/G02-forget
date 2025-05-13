import React from 'react'
import { useEffect } from 'react'
import Navbar from '../component/Navbar'
import AddDiary from '../component/AddDiary'
import * as apiUser from "../api/user"
import { editTemplate } from '../component/ChangeTemplate'

const DiaryPage = () => {
    const userAccount = parseInt(localStorage.getItem("userAccount"));

    const fetchTemplate = async (id) => {
      const data = await apiUser.getTemplate(id);
      if (data.success) {
        if (data.data.data.template === "white") {
          editTemplate("#ECECEC","#F6F6F6","#F2F2F2",1);
        } else if (data.data.data.template === "pink") {
          editTemplate("#FFACAC","#FFD2D2","#FFBBBB",2);
        } else if (data.data.data.template === "yellow") {
          editTemplate("#FFD558","#FFE59A","#FFDD78",3);
        } else if (data.data.data.template === "orange") {
          editTemplate("#FFB163","#FFD4A9","#FFBB77",4);
        }
            
    }
  };
    
  useEffect(() => {
    fetchTemplate(userAccount);
  }, []);
  return (
    <>
    <div className='flex flex-col-reverse lg:flex-col'>
      <nav className='h-0'>
      <Navbar></Navbar>
      </nav>
      <div className='Background h-screen'>
        <div className='flex flex-col-reverse justify-start: 
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