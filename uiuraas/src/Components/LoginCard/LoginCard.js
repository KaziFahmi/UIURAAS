import React from 'react'
import '../../Styles/LoginCard.css'

const LoginCard = () => {
  return (
    <div className="form">
     <form>
       <label className='title'>Log In</label>
       <div className="input-container">
         <input type="text" name="uname" placeholder='Enter login Id ' className='inputField' required />
       </div>
       <div className="input-container">
         <input type="password" name="pass"  placeholder='Enter Password' className='inputField' required />
       </div>
       <div className="button-container">
         <input type="submit" className='loginButton' value='Login' />
       </div>
       <div className="input-container" >
         <a className='forgotPass'>Forgot Password?</a>
       </div>
     </form>
   </div>
  )
}

export default LoginCard