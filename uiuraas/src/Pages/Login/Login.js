import React from 'react'
import '../../Styles/Login.css';
import uiuLogo from '../../Images/uiuLogo.png';
import raasLogo from '../../Images/raasLogo.png';
import img1 from '../../Images/loginImg1.png';
import img2 from '../../Images/loginImg2.png';
import LoginCard from '../../Components/LoginCard/LoginCard';

const Login = () => {
  return (
    <div>
        <div className="navigation">
          <div className="navbarComponent">
              <a href="/" className="logo">
              <img src={uiuLogo}/>
              <img src={raasLogo}/>
              </a>
          </div>
       </div>
       <div className='loginBody'>
        <div className='ImgFrame'>
          <div>
            <img src={img1} className='img1'/>
          </div>
        </div>

        <div className='ImgFrame'>
          <div>
            <img src={img2} className='img2'/>
          </div>
        </div>

        <div className='loginCardFrame'>
          <LoginCard/>
        </div>
       </div>

       
    <div >

    </div>
  </div>
  )
}

export default Login