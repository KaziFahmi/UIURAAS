import React,{useState} from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import UserDataOutput from './UserDataOutput'
//Other data of User
function UserInfo(props) {
  // const [account, setAccount] = useState("Student");
  return (
    <VerticalBlock style={body}>
        <h2 style={{paddingLeft:"10%"}}>User Details</h2>
        <br/>
        <UserDataOutput placeholder="Email" value={props.user.email}/>
        <br/>
        {props.user.type =='student' && (
           <UserDataOutput placeholder="CGPA" value={props.user.cgpa}/>)
         }
         {props.user.type =='student' && (
              <br/>
          )}
         {props.user.type =='student' && (
             <UserDataOutput placeholder="Current Trimester" value={props.user.current_trimester}/>
         )}
         {props.user.type =='student' && (
              <br/>
          )}
        <UserDataOutput placeholder="Country" value={props.country}/>
        <br/>
        <UserDataOutput placeholder="City" value={props.city}/>
        <br/>
    </VerticalBlock>
  )
}

export default UserInfo

const body={
    width:"25vw",
    border:"1px solid"+PrimaryTemplate.yellow,
    fontFamily: "'Inder', sans-serif"
}