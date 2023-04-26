import React, { useState } from 'react'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'


function SendMail() { 
  const [isHovered, setIsHovered] = useState(false);
  return (
   <button style={{...SendMailButton, backgroundColor: isHovered ?PrimaryTemplate.lightBlue : SendMailButton.backgroundColor} } onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        Send Mail
    </button>
  )
}

export default SendMail

const SendMailButton={
    width:"120px",
    height:"50px",
    padding:"15px",
    marginLeft:"2.5%",
    backgroundColor:  PrimaryTemplate.blue ,
    color: "white",
    border: "1px solid"+PrimaryTemplate.blue,
    borderRadius:"12px",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"2%"

  }