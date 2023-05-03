import React from 'react'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import ColumnBlock from '../../../Components/BasicBlocks/ColumnBlock'
import groupImg from '../../../Images/userImg.png'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'


//A block to get data of groups to be displayed in GroupMemberList
const GroupCard = (props) => {
  console.log(props.id)
  return (
    <HorizontalBlock style={groupBody}>
    <HorizontalBlock  > 
      <button style={cardButton} onClick={props.onSelect}> 
      <HorizontalBlock>
      <img src={groupImg}style={profImg} />
      <ColumnBlock >
          
            <input type="text" value={props.name} disabled readOnly style={profInfo}/>
          
       </ColumnBlock></HorizontalBlock>
       </button>
      </HorizontalBlock>
     
  </HorizontalBlock>
  )
}

export default GroupCard

const groupBody={
    display: "flex",
    border: "1px solid"+PrimaryTemplate.borders,
    margin: "2.5%",
    position: 'relative',
    height:"auto",
    alignItems:'left',
    textAlign:'left',
    justifyContent:"space-between",
    marginTop:"4%",
    backgroundColor:PrimaryTemplate.white
  }
  
  const profImg={
    width: "5vw",
    position:"relative",
    
  }
  
  const profInfo={
    fontSize: "25px",
    fontWeight: "600",
    fontFamily: "'Inder', sans-serif",
    width:"90%",
    border:"none",
    background:"none"
  }
  
  
  const cardButton={
    border:"none",
    backGroundColor:PrimaryTemplate.white,
    padding: '0',
    background: 'none',
    boxShadow: 'none',
  }