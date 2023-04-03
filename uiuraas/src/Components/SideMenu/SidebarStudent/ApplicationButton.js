import React from 'react'
import '../../../Styles/Sidebar.css';
import { MdEditDocument } from 'react-icons/md'
const ApplicationButton = (props) => {
  function handleClick() {
    window.location.href = '/application';
  }
  return (  
   <button 
   style={{backgroundColor:"transparent",border:"none"}}
   onClick={handleClick}
   > <MdEditDocument  fontSize="2.5em" className='sidebarButtons'/></button>
  )
}

export default ApplicationButton
