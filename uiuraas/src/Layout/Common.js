import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/SideMenu/Sidebar";
import Body from "../MiddleWare/Body";
import "../Styles/common_layout.css";
function Common(props) {
  return (
    <>
      <div className="header">
       <Navbar/>
       
      </div>

      <div>
        <div className="sideMenu">
            <Sidebar/>
        </div>
        <Body />
        &nbsp;
        
      </div>
      <div className="footer">
        <Footer/>
      </div> 
    </>
  );
}

export default Common;

