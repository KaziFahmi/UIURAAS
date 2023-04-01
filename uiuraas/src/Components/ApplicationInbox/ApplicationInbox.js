import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../SideMenu/SidebarStudent'
function ApplicationInbox() {
  return (
    <>
    <Navbar/>
    <div style={{display: 'flex'}}>
        <Sidebar/>
        <div style={{width: '100%'}}>
            <h1>Email</h1>
            <div>
                <div style={{display: 'flex',justifyContent: 'space-between'}}>
                    <button>Compose</button>
                    <div style={{display: 'flex'}}>
                        <p>Inbox</p>
                        <p>Starred</p>
                        <p>Snozzed</p>
                        <p>Sent</p>
                        <p>Drafts</p>
                        <p>More</p>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default ApplicationInbox