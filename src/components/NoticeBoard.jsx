import React from 'react'
import './NoticeBoard.css'
import nb from '../assets/nb.png'

const NoticeBoard = () => {
  return (
    <div className='noticeBoard'>
         <div className='noticeblack'>
         <i className="fa-solid fa-xmark "></i>
        <img src={nb} className='noticeboardimage' /> 
        </div> 
    </div>
  )
}

export default NoticeBoard