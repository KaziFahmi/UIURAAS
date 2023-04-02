import React from 'react'
import '../../../Styles/Sidebar.css';
import { MdEditDocument } from 'react-icons/md'
const ApplicationButton = (props) => {
  return (
   <button 
   style={{backgroundColor:"transparent",border:"none"}}

   > <MdEditDocument  fontSize="2.5em" className='sidebarButtons'/></button>
  )
}

export default ApplicationButton
