import React from 'react'
import settingIcon from '../../../Images/Settings.png';
import '../../../Styles/Navbar.css';

const SettingsButton = () => {
  return (
    <div>
        <button 
        style={{backgroundColor:"transparent",border:"none"}}>
            <img src={settingIcon}/>
        </button>
    </div>
  )
}

export default SettingsButton