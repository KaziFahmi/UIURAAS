import React from 'react'
import userImg from '../../../Images/userImg.png'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import ProfileEditButton from './ProfileEditButton'
import {FaUserEdit} from "react-icons/fa"
import { Link } from 'react-router-dom'

function ProfileCard(props) {
  return (
    <HorizontalBlock style={profCardBody}>
    <HorizontalBlock style={profItem}>  
      <img src={userImg} style={profImg} />
      <VerticalBlock style={profInfo}>
        <label >{props.name}</label>
        <br/>
        <label >{props.id}</label>
       </VerticalBlock>
       <div style={profileEdit}><Link to='/editprofile'><ProfileEditButton icon={<FaUserEdit/>} /></Link></div> 
      </HorizontalBlock>
     
  </HorizontalBlock>
  )
}

export default ProfileCard

const profCardBody={
    display: "flex",
    border: "1px solid"+PrimaryTemplate.yellow,
    margin: "2.5%",
    position: 'relative',
    height:"20vh",
    width:"83vw",
    alignItems:'left',
    textAlign:'left',
    justifyContent:"space-between",
      
  }
  
  const profImg={
    width: "10vw",
    height:'20vh',
    position:"relative",
    
  }
  
  const profInfo={
    fontSize: "4.5vh",
    fontWeight: "600",
    fontFamily: "'Inter', sans-serif",
    color:PrimaryTemplate.blue,
    width:"70%",
    border:"none",
  }

  const profileEdit={
    alignSelf: 'flex-end',
    fontSize:"100%",
  }

  const profItem={
    justifyContent:"space-between",
    width:"90vw"
  }