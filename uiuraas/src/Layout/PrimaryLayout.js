import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/SideMenu/Sidebar";
function PrimaryLayout(props) {
  
  return (
    <>
      <div className="header">
       <Navbar/>
       
      </div>

      <div className="commonBody" style={commonBody}>
        <div className="sideMenu" style={sideMenu}>
            <Sidebar/>
        </div>
        <div className="mainBody" style={mainBody}>
            {props.body}
        </div>
      </div>
      <div className="footer" style={footer}>
        <Footer/>
      </div> 
    </>
  );
}

export default PrimaryLayout;

const sideMenu={
  paddingLeft: "3%",
  paddingTop: "1%",
}
const mainBody={
  paddingLeft: "2%",
  height:"850px"
}

const footer={
  position: "relative",
  bottom: "0",
  left: "0",
  right: "0",
  padding: "8px",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center"
}

const commonBody={
  display:"flex"
}

