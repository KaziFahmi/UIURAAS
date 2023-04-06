import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import UserDataOutput from './UserDataOutput'

function UserInfo(props) {
  return (
    <VerticalBlock style={body}>
        <h2 style={{paddingLeft:"10%"}}>User Details</h2>
        <br/>
        <UserDataOutput placeholder="Email" value="shaque201021@bscse.uiu.ac.bd"/>
        <br/>
        <UserDataOutput placeholder="CGPA" value="3.84"/>
        <br/>
        <UserDataOutput placeholder="Current Trimester" value="Spring 2023"/>
        <br/>
        <UserDataOutput placeholder="Country" value="Bangladesh"/>
        <br/>
        <UserDataOutput placeholder="City" value="Dhaka"/>
        <br/>
    </VerticalBlock>
  )
}

export default UserInfo

const body={
    width:"25%",
    border:"1px solid"+PrimaryTemplate.yellow,
    fontFamily: "'Inder', sans-serif"
}