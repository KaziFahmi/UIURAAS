import React from 'react';
import uiuLogo from '../../Images/uiuLogo.png';
import raasLogo from '../../Images/raasLogo.png';
import {CgProfile} from "react-icons/cg"
import NavbarButtons from './NavbarButtons';
import { AiOutlineLogout } from 'react-icons/ai';
import { RiNotification2Line } from 'react-icons/ri';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetDetailsQuery } from '../../Redux/Slices/Auth/authService';
import { logout, setCredentials } from '../../Redux/Slices/authSlice'
import { Link } from 'react-router-dom';
import HoverBlock from '../BasicBlocks/HoverBlock';
import PrimaryTemplate from '../ColorTemplates/PrimaryTemplate';

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  // automatically authenticate user if token is found
  const { data, isFetching } = useGetDetailsQuery('userDetails', {
    pollingInterval: 900000, // 15mins
  })

  useEffect(() => {
    if (data) dispatch(setCredentials(data))
  }, [data, dispatch])

  return ( 
    <nav  style={navigation}>
      <div  style={navbarComponent}>
        <a href="/" className="logo">
          <img src={uiuLogo}/>
          <img src={raasLogo}/>
        </a>
      </div>
      <div style={navbarComponent}>
        <Link><HoverBlock hover={{ color: PrimaryTemplate.lightBlue}}><button style={logoutButton} onClick={() => dispatch(logout())}><AiOutlineLogout fontSize={"2.5em"}/></button></HoverBlock></Link>  {/* --Logout-- */}
        <NavbarButtons body={<RiNotification2Line fontSize={"2.5em"}/>} link="/"/>  {/* --Notifications-- */}  
        <NavbarButtons body={<CgProfile fontSize={"2.5em"}/>} link="/profile"/> {/* --profile-- */}
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

const logoutButton={
  backgroundColor:"transparent",
  border:"none",
  
}