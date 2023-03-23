import React from 'react'
import '../../Styles/Login.css';
import uiuLogo from '../../Images/uiuLogo.png';
import raasLogo from '../../Images/raasLogo.png';

const Login = () => {
  return (
    <div className='background'>
        <div className="navigation">
        <div className="navbarComponent">
            <a href="/" className="logo">
            <img src={uiuLogo}/>
            <img src={raasLogo}/>
            </a>
        </div>
    </div>
    <div >

    </div>
  </div>
  )
}

export default Login