import React, { useEffect,useState } from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import SendMail from './SendMail'
import HoverBlock from '../../../Components/BasicBlocks/HoverBlock'
import MemberCard from './MemberCard'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'

function GroupMemberList(props) {
  //To get data from GroupCards
 // console.log(props.group.members)
  //Dummy data
  // console.log(props.people)
  const [members,setMembers] = useState([]);
  useEffect(() => {
    setMembers(props.people);
  }, [props.people]);
    // console.log("here");  
    // console.log(mem);
    // fetch("http://localhost:3001/user/querybyid/"+)
  // useEffect(()=>{
  //   console.log("ok");
  //   console.log(members);
  // },[members]);

  return (
    <VerticalBlock style={groupBody}>
       {/* <HoverBlock hover={{ color: PrimaryTemplate.lightBlue }}><SendMail/></HoverBlock> */}
       {/* <div>{props.group && <p>Selected group ID: {props.group.groupId}</p>}</div> */}
       <HorizontalBlock>
        {/* To map data with component */}
         {members.map((member) => (
          <MemberCard key={member} name={member} id={member.id} email={member.email} />
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