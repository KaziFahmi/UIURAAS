import React,{useState} from 'react';
import { MdEditDocument , MdGroups,MdLogout} from 'react-icons/md'
import { RiHome5Line } from 'react-icons/ri';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { IoMdChatbubbles } from 'react-icons/io';
import PrimaryTemplate from '../ColorTemplates/PrimaryTemplate';
import SidebarButtons from './SidebarButtons';
import LogoutButton from './LogoutButton';

const Sidebar = (props) => {
  const [account, setAccount] = useState("Student");
  return ( 
    <div className="sideNavigation" style={sideNavigation}>
      <div className="sidebarComponent" style={sidebarComponent}>
        <div className='sidebarButtonSet' style={sidebarButtonSet}>

          <SidebarButtons body={<RiHome5Line  fontSize="2.5em"/>} link="/home"/> 
          <SidebarButtons body={<MdEditDocument  fontSize="2.5em"/>} link="/application"/>
          <SidebarButtons body={<IoDocumentTextSharp  fontSize="2.5em" />} link="/applicationread"/>
          <SidebarButtons body={<IoMdChatbubbles  fontSize="2.5em"/>} link="/inbox"/>
          <SidebarButtons body={<MdGroups fontSize="2.5em"/>} link="/"/>
          {/* <LogoutButton body={<MdLogout fontSize="2.5em"/>} link="/"/> */}
        
          
          {/* 
        // {state =='Student' && (
    
        //   )} 
        // {state =='Professor' && (
        //     
        //   )}  */}

          
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

