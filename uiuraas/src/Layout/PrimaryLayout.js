import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/SideMenu/Sidebar";
import VerticalBlock from "../Components/BasicBlocks/VerticalBlock";
import HorizontalBlock from "../Components/BasicBlocks/HorizontalBlock";
import ClipLoader from "react-spinners/ClipLoader"
import { useSelector } from "react-redux";
function PrimaryLayout(props) {
  const {userInfo,loading} = useSelector((state) => state.auth)
  if(loading){
    return <>
      <div style={{height: "100vh", width:"100vw", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <ClipLoader loading={loading} />
      </div>
    </>
  
  }
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

