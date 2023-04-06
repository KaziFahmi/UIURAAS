import React from 'react';
import uiuLogo from '../../Images/uiuLogo.png';
import raasLogo from '../../Images/raasLogo.png';
import {CgProfile} from "react-icons/cg"
import NavbarButtons from './NavbarButtons';
import { FiSettings } from 'react-icons/fi';
import { RiNotification2Line } from 'react-icons/ri';
const Navbar = () => {
  return ( 
    <nav  style={navigation}>
      <div  style={navbarComponent}>
        <a href="/" className="logo">
          <img src={uiuLogo}/>
          <img src={raasLogo}/>
        </a>
      </div>
      <div style={navbarComponent}>
        <NavbarButtons body={<RiNotification2Line fontSize={"3.5em"}/>} link="/"/>
        <NavbarButtons body={<FiSettings fontSize={"3.5em"}/>} link="/"/>
        <NavbarButtons body={<CgProfile fontSize={"3.5em"}/>} link="/"/>
      </div>
  </nav>
  )
}

export default Navbar

const navigation={
  display: "flex",
  justifyContent:" space-between"
}

const navbarComponent={
  display: "flex",
  columnCount: "3"
}