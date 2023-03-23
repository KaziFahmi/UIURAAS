import React from 'react';
import uiuLogo from '../../Images/uiuLogo.png';
import raasLogo from '../../Images/raasLogo.png';
import NotificationButton from './NavbarButtons/NotificationButton';
import SettingsButton from './NavbarButtons/SettingsButton';
import ProfileButton from './NavbarButtons/ProfileButton';
import '../../Styles/Navbar.css';
const Navbar = () => {
  return ( 
    <nav className="navigation">
      <div className="navbarComponent">
        <a href="/" className="logo">
          <img src={uiuLogo}/>
          <img src={raasLogo}/>
        </a>
      </div>
      <div className="navbarComponent">
        <NotificationButton />
        <SettingsButton />
        <ProfileButton />
      </div>

   
  </nav>
  )
}

export default Navbar