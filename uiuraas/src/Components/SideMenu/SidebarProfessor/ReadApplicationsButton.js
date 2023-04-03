import React from 'react'
import '../../../Styles/Sidebar.css';
import { IoDocumentTextSharp } from 'react-icons/io5'

const ReadApplicationsButton = (props) => {
  function handleClick() {
    window.location.href = '/applicationread';
  }
  return (
    <button 
   style={{backgroundColor:"transparent",border:"none"}}
   onClick={handleClick}
   >
    <IoDocumentTextSharp  fontSize="2.5em" className='sidebarButtons'/></button>
  )
}

export default ReadApplicationsButton