import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Navigationbar from "../Components/Navbar/Navigationbar";
import Sidebar from "../Components/SideMenu/Sidebar";
import VerticalBlock from "../Components/BasicBlocks/VerticalBlock";
import HorizontalBlock from "../Components/BasicBlocks/HorizontalBlock";
import PrimaryTemplate from "../Components/ColorTemplates/PrimaryTemplate";
import { useSelector } from "react-redux";
import Spinner from 'react-bootstrap/Spinner';
function PrimaryLayout(props) {


  return (
     
    <VerticalBlock style={layoutBody}>
      
     <Navigationbar/>
      <HorizontalBlock style={commonBody}>
        <div className="sideMenu" style={sideMenu}>
            <Sidebar/>
        </div>
        <div  style={mainBody}>
         
            {props.body}
        </div>
      </HorizontalBlock>

       <div style={footer}><Footer /></div>
    
    </VerticalBlock>
  );
}
export default PrimaryLayout;
const layoutBody={
}

const sideMenu={
  paddingLeft: "3%",
  paddingTop: "1%",
}
const mainBody={
  paddingLeft: "2%",
  height:"auto"
}

const footer={
  position: "relative",
  padding: "8px",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor:PrimaryTemplate.primeBackground
}

const commonBody={
  display:"flex",
  height:"auto",
  backgroundColor:PrimaryTemplate.primeBackground
  
}

