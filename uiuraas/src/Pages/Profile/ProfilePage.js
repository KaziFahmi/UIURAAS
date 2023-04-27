import React from 'react'
import VerticalBlock from '../../Components/BasicBlocks/VerticalBlock'
import HorizontalBlock from '../../Components/BasicBlocks/HorizontalBlock'
import ProfileCard from './ProfilePageComponents/ProfileCard'
import UserInfo from './ProfilePageComponents/UserInfo'
import PastExperience from './ProfilePageComponents/PastExperience'
import Papers from './ProfilePageComponents/Papers'
import { useSelector } from 'react-redux'
//Holds all the components for profile data display
function ProfilePage() {
  const user = useSelector((state) => state.auth)
  console.log(user)
  return (
   <VerticalBlock style={profileBody}>
     <ProfileCard name={user.name} id={user.id}/>
     <HorizontalBlock style={{paddingLeft:"2.5%"}}>
        <UserInfo />
        <PastExperience/>
     </HorizontalBlock>
     <br/>
     <Papers/>
   </VerticalBlock>
  )
}

export default ProfilePage

const profileBody={
    justifyContent:"center",
    width:"85vw"
}