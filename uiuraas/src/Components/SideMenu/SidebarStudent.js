import React from 'react';
import '../../Styles/Sidebar.css';
import HomeButton from './HomeButton';
import MailButton from './MailButton';
import GroupButton from './SidebarProfessor/GroupButton';
import ReadApplicationsButton from './SidebarProfessor/ReadApplicationsButton';
import ApplicationButton from './SidebarStudent/ApplicationButton';
const Sidebar = () => {
  return ( 
    <div className="sideNavigation">
      <div className="sidebarComponent">
        <div className='sidebarButtonSet'>
          
          <HomeButton/>
          <ApplicationButton/>
          <MailButton/>
          
        </div>
      </div>

   
  </div>
  )
}

export default Sidebar