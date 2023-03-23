import React from 'react';
import notifIcon from '../../../Images/notification.png';
import '../../../Styles/Navbar.css';

const NotificationButton = () => {
  return (
    <div>
        <a href="/" className="navbarButton">
            <img src={notifIcon}/>
        </a>
    </div>
  )
}

export default NotificationButton