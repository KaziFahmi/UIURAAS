import React,{useEffect, useState} from 'react';
import { MdEditDocument , MdGroups} from 'react-icons/md'
import { RiHome5Line } from 'react-icons/ri';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { IoMdChatbubbles } from 'react-icons/io';
import PrimaryTemplate from '../ColorTemplates/PrimaryTemplate';
import SidebarButtons from './SidebarButtons';
import {RiAdminFill} from 'react-icons/ri'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = (props) => {
  const [account, setAccount] = useState("");
  const { id } = useParams();
  const [user,setUser] = useState(useSelector((state) => state.auth.userInfo));
  const {userInfo} = useSelector(state=>state.auth)
  // useEffect(() => {
  //   if (id != null) {
  //     console.log(id);
  //     fetch("http://localhost:3001/user/querybyid/" + id)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setUser(data);
  //         setAccount(user.type)
          
  //       });
  //   }
  // }, [id]);

  return ( 
    <div className="sideNavigation" style={sideNavigation}>
      <div className="sidebarComponent" style={sidebarComponent}>
        <div className='sidebarButtonSet' style={sidebarButtonSet}>

          <SidebarButtons body={<RiHome5Line  fontSize="3em"/>} link="/home"/> 
          
          <SidebarButtons body={<MdEditDocument  fontSize="3em"/>} link="/application"/>
          <SidebarButtons body={<IoDocumentTextSharp  fontSize="3em" />} link="/applicationread"/>
          <SidebarButtons body={<MdGroups fontSize="3em"/>} link="/group"/>
          <SidebarButtons body={<RiAdminFill fontSize="3em"/>} link="/adminpanel"/>


          {/* Permanent setup will be used to change types of button accessible to  users depending on account type */}
            
          {userInfo.type =='student' && (
            <SidebarButtons body={<MdEditDocument  fontSize="3em"/>} link="/application"/>
            )} 
          {userInfo.type =='professor' && (
            <SidebarButtons body={<IoDocumentTextSharp  fontSize="3em" />} link="/applicationread"/>
            )} 
          {userInfo.type =='professor' && (
            <SidebarButtons body={<MdGroups fontSize="3em"/>} link="/group"/>
            )} 
          {userInfo.type =='admin' && (
            <SidebarButtons body={<RiAdminFill fontSize="3em"/>} link="/adminpanel"/>
            )}
            
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
  width:"75px",
  height: "auto",
  paddingBottom:"50px",
  borderRadius:"40px",
  margin: "0",
  justifyContent: "center",

}

const sidebarButtonSet={
  paddingTop: "80%",
  paddingLeft: "15%",
  marginRight:"10px"
  
}
