import React from 'react'
import ColumnBlock from '../../Components/BasicBlocks/ColumnBlock'
import HorizontalBlock from '../../Components/BasicBlocks/HorizontalBlock'
import GroupList from './GroupComponents/GroupList'
import GroupMemberList from './GroupComponents/GroupMemberList'

function Group() {
  return (
    <ColumnBlock style={body}>
    <div ><h2>Group</h2></div>
    <HorizontalBlock style={listContainer}>
      <GroupList/>
      <GroupMemberList/>
    </HorizontalBlock>
    </ColumnBlock>
  )
}

export default Group

const body={
  justifyContent:"left",
  alignItems:"left",
  width:"85vw",
}

const listContainer={
  height: "800px",
  width:"100%"
}