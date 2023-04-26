import React from 'react'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import ColumnBlock from '../../../Components/BasicBlocks/ColumnBlock'
import groupImg from '../../../Images/userImg.png'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import { Link } from 'react-router-dom'

const GroupCard = (props) => {
  return (
    <HorizontalBlock style={groupBody}>
    <HorizontalBlock  >  
      <div style={profImg}><img src={groupImg} /></div>
      <ColumnBlock >
          <button style={cardButton} >
            <input type="text" value={props.name} disabled readOnly style={profInfo}/>
            <input type="text" value={props.topic} readOnly disabled style={profInfo} />
          </button>
       </ColumnBlock>
      </HorizontalBlock>
     
  </HorizontalBlock>
  )
}

export default GroupCard

const groupBody={
    display: "flex",
    border: "1px solid"+PrimaryTemplate.yellow,
    margin: "2.5%",
    position: 'relative',
    height:"auto",
    alignItems:'left',
    textAlign:'left',
    justifyContent:"space-between",
    marginTop:"4%"
  }
  
  const profImg={
    width: "auto",
    position:"relative",
    
  }
  
  const profInfo={
    fontSize: "large",
    fontWeight: "600",
    fontFamily: "'Inter', sans-serif",
    width:"90%",
    border:"none",
  }
  
  
  const cardButton={
    border:"none",
    backGroundColor:PrimaryTemplate.white,
    padding: '0',
    background: 'none',
    boxShadow: 'none',
  }