import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../SideMenu/SidebarStudent'
function ApplicationInbox() {
  return (
    <>
    <Navbar/>
    <div style={{display: 'flex'}}>
        <Sidebar/>
    </div>
    </>
  )
}
export default ApplicationInbox