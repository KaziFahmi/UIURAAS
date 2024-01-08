import React,{useEffect, useState} from 'react'
import ColumnBlock from '../../Components/BasicBlocks/ColumnBlock'
import HorizontalBlock from '../../Components/BasicBlocks/HorizontalBlock'
import GroupList from './GroupComponents/GroupList'
import GroupMemberList from './GroupComponents/GroupMemberList'

//Holds all the components of this section

function Group() {
  //To transfer selected group data from GroupList to GroupMemberList
  const [selectedGroup, setSelectedGroup] = useState([]);
  
  const handleGroupSelect = (people) => {
    // console.log("in groups.js"+people)
    setSelectedGroup(people);
  };
  useEffect(()=>{
    console.log(selectedGroup);
  },[selectedGroup]);
  return (
    <ColumnBlock style={body}>
    <div ><h2>Group</h2></div>
    <HorizontalBlock style={listContainer}>
      <GroupList onGroupSelect={handleGroupSelect}/>
      <GroupMemberList people={selectedGroup} />
    </HorizontalBlock>
    </ColumnBlock>
  )
}

export default Group

const body={
  justifyContent:"left",
  alignItems:"left",
  width:"77vw",
}

const listContainer={
  height: "800px",
  width:"100%"
}