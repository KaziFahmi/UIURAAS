import React from 'react'
import '../../../Styles/Sidebar.css';
import { MdGroups } from 'react-icons/md'

const GroupButton = () => {
  return (
    <button 
   style={{backgroundColor:"transparent",border:"none"}}

   >
    <MdGroups  fontSize="2.5em" className='sidebarButtons'/></button>
  )
}

export default GroupButton