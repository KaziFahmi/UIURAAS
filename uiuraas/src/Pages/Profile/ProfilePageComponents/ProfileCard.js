import React, { useEffect, useState } from 'react'
import userImg from '../../../Images/userImg.png'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import ProfileEditButton from './ProfileEditButton'
import {FaUserEdit} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { IoPersonCircleOutline } from 'react-icons/io5'
//Holds user profile data
function ProfileCard(props) {
  const [labelFontSize, setLabelFontSize] = useState(30);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.screen.width;
      const windowWidth = window.innerWidth;

      if (screenWidth < 768) {
        // for mobile screens
        setLabelFontSize(screenWidth <= 480 ? 30: 30);
      } else {
        // for desktop screens
        setLabelFontSize(windowWidth >= 768 ? 30 : 25);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // cleanup function to remove event listener on component unmount
  }, []);

  return (
    <HorizontalBlock style={profCardBody}>
    <HorizontalBlock style={{...profItem,justifyContent: 'start'}}>  
      <IoPersonCircleOutline style={profImg} />
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width: "100%"}}>
      <VerticalBlock style={profInfo}>
        <label style={{ fontSize: `${labelFontSize}px` }}>{props.name}</label>
        <br/>
        <label style={{ fontSize: `${labelFontSize}px` }}>{props.id}</label>
       </VerticalBlock>
       {props.isEditable &&
       <div style={profileEdit}><Link to='/editprofile'><ProfileEditButton icon={<FaUserEdit color='rgb(11, 128, 218)'/>} /></Link></div> }
       </div>
      </HorizontalBlock>
     
  </HorizontalBlock>
  )
}

export default ProfileCard

const profCardBody={
    display: "flex",
    // border: "1px solid"+PrimaryTemplate.borders,
    borderRadius: "10px",
    padding: "2.5%",
    margin: "2.5% 0 2.5% 0",
    position: 'relative',
    // height:"20vh",
    // width:"80vw",
    alignItems:'left',
    textAlign:'left',
    // justifyContent:"left", 
    backgroundColor:PrimaryTemplate.white
  }
  
  const profImg={
    width: "100px",
    height:'100px',
    position:"relative",
    marginRight:"2.5%",
    
  }
  
  const profInfo={
    fontSize: "1.5rm",
    // fontWeight: "300",
    color:PrimaryTemplate.blue,
    // width:"70%",
    border:"none",
  }

  const profileEdit={
    alignSelf: 'flex-end',
    fontSize:"100%",
  }

  const profItem={
    justifyContent:"space-between",
    // width:"90vw"
    width: "100%"
  }