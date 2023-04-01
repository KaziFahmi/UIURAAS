import React from 'react'
import "../../Styles/application_card.css"

const EmailView = () => {
  return (
    <div className='EmailViewCard' style={{display: 'flex', border: '1px solid #FC9E04', margin: '2.5%'}}>
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