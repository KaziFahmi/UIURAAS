import React from 'react'
import VerticalBlock from '../../Components/BasicBlocks/VerticalBlock'
import HorizontalBlock from '../../Components/BasicBlocks/HorizontalBlock'
import PrimaryTemplate from '../../Components/ColorTemplates/PrimaryTemplate'
import ProfileCard from './ProfilePageComponents/ProfileCard'
import UserInfo from './ProfilePageComponents/UserInfo'
import PastExperience from './ProfilePageComponents/PastExperience'
import Papers from './ProfilePageComponents/Papers'

function ProfilePage() {
  return (
   <VerticalBlock>
     <ProfileCard/>
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

const userIdentity={
    border:"1px solid"+PrimaryTemplate.yellow,
    width:"90%",
    backgroundColor:"Red"
}