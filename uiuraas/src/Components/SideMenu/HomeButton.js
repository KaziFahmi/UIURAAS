import React from 'react';
import '../../Styles/Sidebar.css';
import { RiHome5Line } from 'react-icons/ri'

const HomeButton = () => {
  return (
    <button 
   style={{backgroundColor:"transparent",border:"none"}}

   ><RiHome5Line  fontSize="2.5em" className='sidebarButtons'/></button>
  )
}

export default HomeButton