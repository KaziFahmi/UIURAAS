import React from 'react'
import VerticalBlock from '../../Components/BasicBlocks/VerticalBlock'
import HorizontalBlock from '../../Components/BasicBlocks/HorizontalBlock'
import PrimaryTemplate from '../../Components/ColorTemplates/PrimaryTemplate'
import ProfileCard from './HomePageComponents/ProfileCard'
import FindCard from './HomePageComponents/FindCard'
import WhatsNew from './HomePageComponents/WhatsNew'
import Notices from './HomePageComponents/Notices'
import { useSelector } from 'react-redux'
import Spinner from 'react-bootstrap/esm/Spinner'
//Holds the components of this section. Might require additional functions depending on situation
function HomePage() {
  const {userInfo,loading} = useSelector((state) => state.auth)
   if(loading)
   {
    return(
      <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" variant="primary" />
    </div>
    )
   }
   else
   {
  return (
   <VerticalBlock style={homeBody}>
    <HorizontalBlock>
      <ProfileCard userInfo={userInfo}/>
      
    </HorizontalBlock>
     
     <HorizontalBlock>
        <FindCard/>
        <VerticalBlock>
          <Notices/> 
          <WhatsNew/>
        </VerticalBlock>
       
     </HorizontalBlock>
   </VerticalBlock>
  )
   }
}

export default HomePage

const homeBody = {
  width: "77vw",
};