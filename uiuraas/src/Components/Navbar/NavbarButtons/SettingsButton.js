import React from 'react'
import settingIcon from '../../../Images/Settings.png';
import '../../../Styles/Navbar.css';

const SettingsButton = () => {
  return (
    <div>
        <a href="/" className="navbarButton">
            <img src={settingIcon}/>
        </a>
    </div>
  )
}

export default SettingsButton