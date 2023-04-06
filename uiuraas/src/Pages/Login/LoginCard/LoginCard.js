import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'

const LoginCard = () => {
  return (
    <VerticalBlock style={form}>
     <form  style={formContainer}>
       <label  style={title}>Log In</label>
       <div  style={inputContainer}>
         <input type="text" name="uname" placeholder='Enter login Id '  style={inputField} required />
       </div>
       <div  style={inputContainer}>
         <input type="password" name="pass" placeholder='Enter Password '  style={inputField} required />
       </div>
       <div  style={inputContainer}>
         <button type="submit" style={loginButton}>Login</button>
       </div>
       <a  style={forgotPass}>Forgot Password?</a>
     </form>
   </VerticalBlock>
  )
}

export default LoginCard

const form={
  justifyContent: "center",
  alignItems:"center"
}

const formContainer={
  justifyContent: "center",
  alignItems: "center"
}

const title ={
  paddingLeft: "43%",
  fontSize: "25px",
  marginBottom: "20px",
  color:PrimaryTemplate.yellow,
  fontFamily: "'Inter', sans-serif"
}

const inputContainer ={
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}

const inputField={
  width: "75%",
  padding: "15px",
  border: "2px solid "+PrimaryTemplate.gray58,
  marginTop: "10px",
  marginBottom: "15px",
  color: "#000000c2",
  fontSize: "18px",
}

const loginButton={
  width:"82%",
  padding:"15px",
  marginTop: "10px",
  marginBottom: "15px",
  backgroundColor: PrimaryTemplate.blue,
  color: "white",
  border: "1px solid"+PrimaryTemplate.blue,
}

const forgotPass={
  color:PrimaryTemplate.yellow,
  paddingLeft: "38%",
  fontSize: "small",
  fontFamily: "'Inter', sans-serif"
}

