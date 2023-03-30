import React from 'react'
import '../../Styles/LoginCard.css'

const LoginCard = () => {
  return (
    <div className="form">
     <form className='formContainer'>
       <label className='title'>Log In</label>
       <div className="input-container">
         <input type="text" name="uname" placeholder='Enter login Id ' className='inputField' required />
       </div>
       <div className="input-container">
         <input type="password" name="pass" placeholder='Enter Password ' className='inputField' required />
       </div>
       <div className="input-container">
         <button type="submit" className='loginButton'>Login</button>
       </div>
       <a className='forgotPass'>Forgot Password?</a>
     </form>
   </div>
  )
}

export default LoginCard