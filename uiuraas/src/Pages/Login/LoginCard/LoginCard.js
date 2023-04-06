import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'

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
  color: "#FC9E04",
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
  border: "2px solid #949494",
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
  backgroundColor: "#14213D",
  color: "white",
  border: "1px solid #14213D",
}

const forgotPass={
  color:" #FC9E04",
  paddingLeft: "38%",
  fontSize: "small",
  fontFamily: "'Inter', sans-serif"
}

