import React, { useEffect, useState } from 'react'
import userImg from '../../../Images/userImg.png'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
//Holds user data. Requires functions
function ProfileCard(props) {
  const [labelFontSize, setLabelFontSize] = useState(40);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.screen.width;
      const windowWidth = window.innerWidth;

      if (screenWidth < 768) {
        // for mobile screens
        setLabelFontSize(screenWidth <= 480 ? 30: 40);
      } else {
        // for desktop screens
        setLabelFontSize(windowWidth >= 768 ? 40 : 30);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // cleanup function to remove event listener on component unmount
  }, []);

  return (
    <HorizontalBlock style={profCardBody}>
    <div style={profItem}>  
      <img src={userImg} style={{...profImg }} />
      <VerticalBlock style={profInfo}>
        <label style={{ fontSize: `${labelFontSize}px` }}>{props.userInfo.name}</label>
        <br/>
        <label style={{ fontSize: `${labelFontSize}px` }}>{props.userInfo.id}</label>
       </VerticalBlock>
      </div>
     
  </HorizontalBlock>
  )
}

export default ProfileCard

const profCardBody={
  display: "flex",
  border: "1px solid"+PrimaryTemplate.borders,
  margin: "2.5%",
  position: 'relative',
  height:"20vh",
  width:"75vw",
  alignItems:'left',
  textAlign:'left',
  justifyContent:"space-between", 
  backgroundColor:PrimaryTemplate.white
}

const profImg={
  width: "10vw",
  height:'20vh',
  position:"relative",
  
}

const profInfo={
  fontSize: "4.5vh",
  fontWeight: "600",
  color:PrimaryTemplate.blue,
  width:"70%",
  border:"none",
  marginLeft:"7%"
}

const profItem={
  display:"flex",
  width:"90vw"
}