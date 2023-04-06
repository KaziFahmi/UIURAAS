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
   <VerticalBlock style={profileBody}>
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

const profileBody={
    justifyContent:"center"
}