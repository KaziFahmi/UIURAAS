import React from 'react'
import CreateNotice from './AdminPanelComponent/CreateNotice'
import CreateNews from './AdminPanelComponent/CreateNews'
import CreateAccount from './AdminPanelComponent/CreateAccount'

function AdminPanel() {
  return (
    <>
    <CreateAccount/>
   <CreateNotice/>
   <CreateNews/>
   </>
  )
}

export default AdminPanel