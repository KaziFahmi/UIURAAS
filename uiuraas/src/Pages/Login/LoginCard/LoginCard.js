import React from 'react'

const LoginCard = () => {
  return (
    <div className="form" style={form}>
     <form className='formContainer' style={formContainer}>
       <label className='title' style={title}>Log In</label>
       <div className="input-container" style={inputContainer}>
         <input type="text" name="uname" placeholder='Enter login Id ' className='inputField' style={inputField} required />
       </div>
       <div className="input-container" style={inputContainer}>
         <input type="password" name="pass" placeholder='Enter Password ' className='inputField' style={inputField} required />
       </div>
       <div className="input-container" style={inputContainer}>
         <button type="submit" className='loginButton' style={loginButton}>Login</button>
       </div>
       <a className='forgotPass' style={forgotPass}>Forgot Password?</a>
     </form>
   </div>
  )
}

export default LoginCard

const form={
  justifyContent: "center",
  alignItems:"center"
}

const buttonContainer ={
  display: "flex",
  justifyContent: "center"
}

const loginForm ={
  backgroundColor: "white",
  padding: "2rem",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
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
    padding: "10px 15px",
    border: "2px solid #949494",
    marginTop: "10px",
    marginBottom: "15px",
    color: "#000000c2",
    fontSize: "18px",
    marginLeft: "50px"
}

const loginButton={
  width:"82%",
  height:"40px",
  backgroundColor: "#14213D",
  color: "white",
  border: "1px solid #14213D",
  marginLeft: "10%"
}

const forgotPass={
  color:" #FC9E04",
  paddingLeft: "38%",
  fontSize: "small",
  fontFamily: "'Inter', sans-serif"
}

// .forgotPass:hover{
//   color:#b47003
// }