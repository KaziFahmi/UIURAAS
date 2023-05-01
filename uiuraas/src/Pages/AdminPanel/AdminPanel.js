import React from 'react'
import CreateNotice from './AdminPanelComponent/CreateNotice'
import CreateNews from './AdminPanelComponent/CreateNews'
import CreateAccount from './AdminPanelComponent/CreateAccount'

function AdminPanel() {
  return (
    <>
    <div ><h2 style={{marginTop:"11px",paddingLeft:"2%"}}>Admin Panel</h2></div>
   <CreateAccount/>
   <CreateNotice/>
   <CreateNews/>
   </>
  )
}

export default AdminPanel