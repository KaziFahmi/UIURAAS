import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import GroupCard from './GroupCard'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'

function GroupList() {
  return (
    <VerticalBlock style={groupBody}>
      <GroupCard  name="Group 1" topic="Computer Vision"/>
    </VerticalBlock>
  )
}

export default GroupList

const groupBody={
  border: "1px solid"+PrimaryTemplate.yellow,
  width:" 30%",
  overflowY: "scroll"
}

