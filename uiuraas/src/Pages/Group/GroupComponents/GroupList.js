import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import GroupCard from './GroupCard'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'

function GroupList({ onGroupSelect }) {
  const handleSelect = (group) => {
    onGroupSelect(group);
  };

  return (
    <VerticalBlock style={groupBody}>
      <GroupCard groupId='1' name="Group 1" topic="Computer Vision" onSelect={() => handleSelect({ name: "Group 1", topic: "Computer Vision",groupId:'1' })}/>
      <GroupCard groupId='2' name="Group 2" topic="Computer Vision" onSelect={() => handleSelect({ name: "Group 2", topic: "Computer Vision",groupId:'2' })}/>
    </VerticalBlock>
  )
}

export default GroupList

const groupBody={
  border: "1px solid"+PrimaryTemplate.yellow,
  width:" 30%",
  overflowY: "scroll"
}

