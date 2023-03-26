import React from 'react'
import '../../Styles/Sidebar.css';
import { IoMdChatbubbles } from 'react-icons/io'
const MailButton = () => {
  return (
    <a><IoMdChatbubbles  fontSize="2.5em" className='sidebarButtons'/></a>
  )
}

export default MailButton