import React from 'react'
import uiuLogo from '../../Images/uiuLogo.png';
import raasLogo from '../../Images/raasLogo.png';
import img1 from '../../Images/loginImg1.png';
import img2 from '../../Images/loginImg2.png';
import LoginCard from './LoginCard/LoginCard';
import VerticalBlock from '../../Components/BasicBlocks/VerticalBlock';
import HorizontalBlock from '../../Components/BasicBlocks/HorizontalBlock';

const Login = () => {
  return (
    <VerticalBlock>
        <HorizontalBlock  >
          <HorizontalBlock  >
              <a href="/" >
              <img src={uiuLogo}/>
              <img src={raasLogo}/>
              </a>
          </HorizontalBlock>
       </HorizontalBlock>
       
       <VerticalBlock>
        <div>
          <div>
            <img src={img1} style={img1Style}/>
          </div>
        </div>

        <div >
          <div>
            <img src={img2} style={img2Style} />
          </div>
        </div>

        <div  style={loginCardFrame}>
          <LoginCard/>
        </div>
       </VerticalBlock>

       
    <div >

    </div>
  </VerticalBlock>
  )
}

export default Login

const navigation={
  display: "flex"
}

const navbarComponent={
  display: "inline-block"
}

const img1Style={
  width:"80%",
  paddingLeft: "20%"
}
const img2Style={
  width:"80%",
}

const loginCardFrame={
  width:"25%",
  backgroundColor: "white",
  padding: "2rem",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  border:" 1px solid black",
  position: "absolute",
  left: "35%",
  top: "25%"
  
}