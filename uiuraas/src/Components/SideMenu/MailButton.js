import React from 'react'
import '../../Styles/Sidebar.css';
import { IoMdChatbubbles } from 'react-icons/io'
const MailButton = () => {
  return (
    <button 
   style={{backgroundColor:"transparent",border:"none"}}

   ><IoMdChatbubbles  fontSize="2.5em" className='sidebarButtons'/></button>
  )
}

export default MailButton