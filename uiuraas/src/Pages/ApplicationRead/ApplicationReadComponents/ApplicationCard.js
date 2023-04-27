import React from 'react'
import userImg from '../../../Images/userImg.png'
import ColumnBlock from '../../../Components/BasicBlocks/ColumnBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import RemoveButton from './RemoveButton'
import {IoTrashSharp} from "react-icons/io5";

const ApplicationCard = (props) => {
  
// form id to find names
const handleClick = () => {
  const data = {
    id:props.formId
  };
  props.handleApplicationData(data);
}

  return (
    <HorizontalBlock style={appCardBody}>
      <HorizontalBlock  >  
        <div style={profImg}><img src={userImg} /></div>
        <ColumnBlock >
            <button onClick={handleClick}style={cardButton} >
              <input type="text" value={props.name} disabled readOnly style={profInfo}/>
              <input type="text" value={props.formId} readOnly disabled style={profInfo}/>
            </button>
         </ColumnBlock>
        </HorizontalBlock>
        <input style={checkbox}   type="checkbox"/>
        <RemoveButton formId={props.formId} body={<IoTrashSharp/>}/>
       
    </HorizontalBlock>
  )
}

export default ApplicationCard

const appCardBody={
  display: "flex",
    border: "1px solid"+PrimaryTemplate.blue,
    margin: "2.5%",
    position: 'relative',
    height:"auto",
    alignItems:'left',
   justifyContent:'left',
   textAlign:'left',
   justifyContent:"space-between"
    
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

const checkbox={
  border:"1px solid"+PrimaryTemplate.yellow+"!important"
}

const cardButton={
  border:"none",
  backGroundColor:PrimaryTemplate.white,
  padding: '0',
  border: '0',
  background: 'none',
  boxShadow: 'none',
}