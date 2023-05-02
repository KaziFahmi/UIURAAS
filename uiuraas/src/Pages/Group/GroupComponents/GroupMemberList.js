import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import SendMail from './SendMail'
import HoverBlock from '../../../Components/BasicBlocks/HoverBlock'
import MemberCard from './MemberCard'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'

function GroupMemberList(props) {
  //To get data from GroupCards
  console.log(props.groupId)
  //Dummy data
  const members = props.group ? [
    { name: "Shahil Yasar Haque", id: "011201021" },
    { name: "Latin Chakma", id: "011201232" },
  ] : [];

  return (
    <VerticalBlock style={groupBody}>
       <HoverBlock hover={{ color: PrimaryTemplate.lightBlue }}><SendMail groupId={props.group.groupId}/></HoverBlock>
       {/* <div>{props.group && <p>Selected group ID: {props.group.groupId}</p>}</div> */}
       <HorizontalBlock>
        {/* To map data with component */}
         {members.map((member) => (
          <MemberCard key={member.id} name={member.name} id={member.id} />
        ))}
       </HorizontalBlock>
    </VerticalBlock>
  )
}

export default GroupMemberList

const groupBody={
  border: "1px solid"+PrimaryTemplate.borders,
  overflowY: "scroll",
  width: "80%",
  fontFamily: "'Inder', sans-serif",
  backgroundColor:PrimaryTemplate.white
}