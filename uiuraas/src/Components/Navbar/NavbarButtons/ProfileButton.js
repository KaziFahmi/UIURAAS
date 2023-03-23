import React from 'react'
import profileIcon from '../../../Images/profile.png';
import '../../../Styles/Navbar.css';

const ProfileButton = () => {
  return (
    <div>
        <a href="/" className="navbarButton">
            <img src={profileIcon}/>
        </a>
    </div>
  )
}

export default ProfileButton