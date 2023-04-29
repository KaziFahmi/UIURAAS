import React from 'react'
import VerticalBlock from '../../Components/BasicBlocks/VerticalBlock'
import HorizontalBlock from '../../Components/BasicBlocks/HorizontalBlock'
import PrimaryTemplate from '../../Components/ColorTemplates/PrimaryTemplate'
import ProfileCard from './HomePageComponents/ProfileCard'
import FindCard from './HomePageComponents/FindCard'
import WhatsNew from './HomePageComponents/WhatsNew'
import Notices from './HomePageComponents/Notices'
import { useSelector } from 'react-redux'
//Holds the components of this section. Might require additional functions depending on situation
function HomePage() {
  const {userInfo,loading} = useSelector((state) => state.auth)
  if(loading){
    return <div>Loading...</div>
  }
  return (
   <VerticalBlock>
    <HorizontalBlock>
      <ProfileCard userInfo={userInfo}/>
      <Notices/>
    </HorizontalBlock>
     
     <HorizontalBlock>
        <FindCard/>
        <WhatsNew/>
     </HorizontalBlock>
   </VerticalBlock>
  )
}

export default HomePage

const userIdentity={
    border:"1px solid"+PrimaryTemplate.yellow,
    width:"90%",
    backgroundColor:"Red"
}