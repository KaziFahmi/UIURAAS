import React from 'react'
import uiuLogo from '../../Images/uiuLogo.png';
import raasLogo from '../../Images/raasLogo.png';
import img1 from '../../Images/loginImg1.png';
import img2 from '../../Images/loginImg2.png';
import LoginCard from './LoginCard/LoginCard';

const Login = () => {
  return (
    <div>
        <div className="navigation" style={navigation}>
          <div className="navbarComponent" style={navbarComponent}>
              <a href="/" className="logo">
              <img src={uiuLogo}/>
              <img src={raasLogo}/>
              </a>
          </div>
       </div>
       <div className='loginBody'>
        <div className='ImgFrame'>
          <div>
            <img src={img1} className='img1' style={img1Style}/>
          </div>
        </div>

        <div className='ImgFrame'>
          <div>
            <img src={img2} className='img2'/>
          </div>
        </div>

        <div className='loginCardFrame' style={loginCardFrame}>
          <LoginCard/>
        </div>
       </div>

       
    <div >

    </div>
  </div>
  )
}

export default Login

const navigation={
  display: "flex"
}

const navbarComponent={
  display: "inline-block"
}

const img1Style={
  paddingLeft: "33.5%"
}

const loginCardFrame={
  width:"25%",
  backgroundColor: "white",
  padding: "2rem",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  border:" 1px solid black",
  position: "absolute",
  left: "35%",
  top: "25%"
  
}