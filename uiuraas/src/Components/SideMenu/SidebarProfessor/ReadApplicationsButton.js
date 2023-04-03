import React from 'react'
import '../../../Styles/Sidebar.css';
import { IoDocumentTextSharp } from 'react-icons/io5'

const ReadApplicationsButton = (props) => {

  return (
    <button 
   style={{backgroundColor:"transparent",border:"none"}}

   >
    <IoDocumentTextSharp  fontSize="2.5em" className='sidebarButtons'/></button>
  )
}

export default ReadApplicationsButton