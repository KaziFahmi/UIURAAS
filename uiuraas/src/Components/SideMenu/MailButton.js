import React from 'react'
import '../../Styles/Sidebar.css';
import { IoMdChatbubbles } from 'react-icons/io'
const MailButton = () => {

  function handleClick() {
    window.location.href = '/inbox';
  }
  
  return (
    <button 
   style={{backgroundColor:"transparent",border:"none"}}
   onClick={handleClick}
   ><IoMdChatbubbles  fontSize="2.5em" className='sidebarButtons'/></button>
  )
}

export default MailButton