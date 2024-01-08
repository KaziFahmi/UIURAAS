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
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

const Navigationbar = () => {
  // to get data through redux
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  // automatically authenticate user if token is found
  const { data, isFetching } = useGetDetailsQuery('userDetails', {
    pollingInterval: 900000, // 15mins
  })

  useEffect(() => {
    if (data) dispatch(setCredentials(data))
  }, [data, dispatch])
  
  const [justifyContentset, setJustifyContent] = useState("");

    useEffect(() => {
        function handleResize() {
          const windowWidth = window.innerWidth;
    
          if (windowWidth < 768) {
            setJustifyContent("none")
        } else if (windowWidth >= 992) {
          setJustifyContent("space-between");
        } 
          
    
          
        }
    
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
        // cleanup function to remove event listener on component unmount
      }, [justifyContentset]);
    

  return ( 

    <Navbar bg="light" expand="lg" >
      <Container fluid style={{justifyContent:`${justifyContentset}`}}>
        <div>
        <Navbar.Brand >
            <div  style={navbarComponent}>
          
          <a href="/home" className="logo">
            
            <img src={uiuLogo}/> {/* UIU Logo */}
            <img src={raasLogo}/>{/* RAAS Logo */}
          </a>
        </div>
        </Navbar.Brand>
        
        </div>
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link ><HoverBlock hover={{ color: PrimaryTemplate.lightBlue}}><button style={logoutButton} onClick={() => dispatch(logout())}><AiOutlineLogout fontSize={"3em"}/></button></HoverBlock></Nav.Link>
            <Nav.Link ><NavbarButtons body={<RiNotification2Line fontSize={"3em"}/>} link="/"/>  {/* --Notifications-- */}  </Nav.Link>
            <Nav.Link ><NavbarButtons body={<CgProfile fontSize={"3em"}/>} link={`/profile/${userInfo.id}`}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>

  )
}

export default Navigationbar

const navbarComponent={
  display: "flex",
  columnCount: "3",
  justifyContent:"center",
  alignItems:"center",
  textAlign:"right"
}

const logoutButton={
  backgroundColor:"transparent",
  border:"none",
  
}