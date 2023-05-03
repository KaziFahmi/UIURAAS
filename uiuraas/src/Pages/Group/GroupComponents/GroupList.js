import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import GroupCard from './GroupCard'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
//List holding all the group cards
function GroupList({ onGroupSelect }) {
  const [groups,setGroups]=React.useState([])
  React.useEffect(() => {
    fetch('http://localhost:3001/groups/all')
    .then(res=>res.json())
    .then(data=>setGroups(data))
  }, [setGroups])
  // to pass data of groups to GroupMemberList
  const handleSelect = (group) => {
    onGroupSelect(group);
  };

  return (
    <VerticalBlock style={groupBody}>
      {groups.map(group=>(
      <GroupCard id={group.id} name={group.name}  onSelect={() => handleSelect({ name: "Group 1", topic: "Computer Vision",groupId:'1' })}/>
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

