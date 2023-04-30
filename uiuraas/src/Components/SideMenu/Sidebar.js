import React,{useState} from 'react';
import { MdEditDocument , MdGroups} from 'react-icons/md'
import { RiHome5Line } from 'react-icons/ri';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { IoMdChatbubbles } from 'react-icons/io';
import PrimaryTemplate from '../ColorTemplates/PrimaryTemplate';
import SidebarButtons from './SidebarButtons';
import {RiAdminFill} from 'react-icons/ri'

const Sidebar = (props) => {
  const [account, setAccount] = useState("Professor");
  return ( 
    <div className="sideNavigation" style={sideNavigation}>
      <div className="sidebarComponent" style={sidebarComponent}>
        <div className='sidebarButtonSet' style={sidebarButtonSet}>

          <SidebarButtons body={<RiHome5Line  fontSize="2.5em"/>} link="/home"/> 
          <SidebarButtons body={<MdEditDocument  fontSize="2.5em"/>} link="/application"/>
          <SidebarButtons body={<IoDocumentTextSharp  fontSize="2.5em" />} link="/applicationread"/>
          <SidebarButtons body={<MdGroups fontSize="2.5em"/>} link="/group"/>
          <SidebarButtons body={<RiAdminFill fontSize="2.5em"/>} link="/adminpanel"/>


          {/* Permanent setup will be used to change types of button accessible to  users depending on account type */}
            
          {/* {account =='Student' && (
            <SidebarButtons body={<MdEditDocument  fontSize="2.5em"/>} link="/application"/>
            )} 
          {account =='Professor' && (
            <SidebarButtons body={<IoDocumentTextSharp  fontSize="2.5em" />} link="/applicationread"/>
            )} 
          {account =='Professor' && (
            <SidebarButtons body={<MdGroups fontSize="2.5em"/>} link="/group"/>
            )} 
          {account =='Admin' && (
            <SidebarButtons body={<RiAdminFill fontSize="2.5em"/>} link="/adminpanel"/>
            )}
             */}
          {/* Permanent setup */}

            
        </div>
      </div>

   
  </div>
  )
}

export default Sidebar

const sideNavigation={
  paddingTop: "2%",
  paddingLeft: "1%",
  display: "flex",

}
const sidebarComponent={
  backgroundColor: PrimaryTemplate.blue,
  width:"70px",
  height: "auto",
  paddingBottom:"50px",
  borderRadius:"40px",
  margin: "0",
  justifyContent: "center"
}

const sidebarButtonSet={
  paddingTop: "80%",
  paddingLeft: "15%"
  
}

