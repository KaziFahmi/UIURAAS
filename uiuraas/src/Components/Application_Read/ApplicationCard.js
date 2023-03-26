import React from 'react'
import "../../Styles/application_card.css"
import userImg from '../../Images/userImg.png'

const ApplicationCard = () => {
  return (
    <div className='appCardBody'>
        <div className='column profImg'><img src={userImg}/></div>
        <div className='column profInfo'>
            <div>Shahil Yasar Haque</div>
            <div>011201021</div>
        </div>
        <div className='check'>
            <input  type="checkbox"/>
        </div>
    </div>
  )
}

export default ApplicationCard