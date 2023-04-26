import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import SendMail from './SendMail'
import HoverBlock from '../../../Components/BasicBlocks/HoverBlock'
import MemberCard from './MemberCard'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'

function GroupMemberList() {
  return (
    <VerticalBlock style={groupBody}>
       <HoverBlock hover={{ color: PrimaryTemplate.lightBlue }}><SendMail/></HoverBlock>
       
       <HorizontalBlock>
        <MemberCard name="Shahil Yasar Haque" id="011201021"/>
        <MemberCard name="Latin Chakma" id="011201232"/>
       </HorizontalBlock>
    </VerticalBlock>
  )
}

export default GroupMemberList

const groupBody={
  border: "1px solid"+PrimaryTemplate.yellow,
  overflowY: "scroll",
  width: "90%",
  fontFamily: "'Inder', sans-serif"
}