import React from 'react'
import userImg from '../../Images/userImg.png'

const ApplicationCard = () => {
  return (
    <div className='appCardBody' style={appCardBody}>
        <div className='column profImg' style={profImg}><img src={userImg} /></div>
        <div className='column profInfo' style={profInfo}>
            <div>Shahil Yasar Haque</div>
            <div>011201021</div>
        </div>
        <div className='check' >
            <input  type="checkbox"/>
        </div>
    </div>
  )
}

export default ApplicationCard

const appCardBody={
  display: "flex",
    border: "1px solid #FC9E04",
    margin: "2.5%",
    position: 'relative',
    height:"auto"
}

const profImg={
  width: "auto",
  position:"relative"
}

const profInfo={
  fontSize: "large",
  fontWeight: "600",
  fontFamily: "'Inter', sans-serif",
  width:"auto"
}