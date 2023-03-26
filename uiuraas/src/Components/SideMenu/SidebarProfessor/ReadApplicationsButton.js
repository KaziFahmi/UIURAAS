import React from 'react'
import '../../../Styles/Sidebar.css';
import { IoDocumentTextSharp } from 'react-icons/io5'

const ReadApplicationsButton = () => {
  return (
    <a><IoDocumentTextSharp  fontSize="2.5em" className='sidebarButtons'/></a>
  )
}

export default ReadApplicationsButton