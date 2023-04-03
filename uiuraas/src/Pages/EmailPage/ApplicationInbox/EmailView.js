import React from 'react'


const EmailView = () => {
  return (
    <div className='EmailViewCard' style={emailView}>
        <div className='check'>
            <input  type="checkbox"/>
        </div>
        <div className='subject' style={{}}>
            Email requesting withdrawal from course
        </div>
        
    </div>
  )
}

export default EmailView

const emailView={
    display:"flex",
    border:"1px solid #FC9E04",
    padding:"1%",
    margin:"2%"
}