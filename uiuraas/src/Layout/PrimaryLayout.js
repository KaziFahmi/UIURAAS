import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/SideMenu/Sidebar";
import VerticalBlock from "../Components/BasicBlocks/VerticalBlock";
import HorizontalBlock from "../Components/BasicBlocks/HorizontalBlock";
function PrimaryLayout(props) {
  
  return (
    <VerticalBlock>
     <Navbar/>
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
  marginTop:"2%"
}

const commonBody={
  display:"flex"
}

