import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import GroupCard from './GroupCard'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
//List holding all the group cards
function GroupList({ onGroupSelect }) {
  const [groups,setGroups]=React.useState([])
  const [people,setPeople]=React.useState([])
  React.useEffect(() => {
    fetch('http://localhost:3001/groups/all')
    .then(res=>res.json())
    .then(data=>setGroups(data))
  }, [setGroups])
  // to pass data of groups to GroupMemberList
  const handleSelect = (people) => {
    console.log("In groupllist.js"+people)
    onGroupSelect(people);
  };
 
  return (
    <VerticalBlock style={groupBody}>
      {groups.map(group=>(
      <GroupCard id={group.id} name={group.name} members={group.members} onSelect={() => onGroupSelect(group.members )}/>
      ))}
    </VerticalBlock>
  )
}

export default GroupList

const groupBody={
  border: "1px solid"+PrimaryTemplate.borders,
  width:" 30%",
  overflow: "auto",
  backgroundColor:PrimaryTemplate.white,
  marginRight:"1vw"
}

