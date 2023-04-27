import React,{useState} from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import UserDataOutput from './UserDataOutput'
//Other data of User
function UserInfo(props) {
  const [account, setAccount] = useState("Student");
  return (
    <VerticalBlock style={body}>
        <h2 style={{paddingLeft:"10%"}}>User Details</h2>
        <br/>
        <UserDataOutput placeholder="Email" value={props.email}/>
        <br/>
        {account =='Student' && (
           <UserDataOutput placeholder="CGPA" value={props.cgpa}/>)
         }
         {account =='Student' && (
              <br/>
          )}
         {account =='Student' && (
             <UserDataOutput placeholder="Current Trimester" value={props.trimester}/>
         )}
         {account =='Student' && (
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