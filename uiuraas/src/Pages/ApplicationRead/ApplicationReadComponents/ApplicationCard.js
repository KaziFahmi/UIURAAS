import React,{useEffect, useState} from 'react'
import userImg from '../../../Images/userImg.png'
import ColumnBlock from '../../../Components/BasicBlocks/ColumnBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import RemoveButton from './RemoveButton'
import {IoTrashSharp} from "react-icons/io5";
//a clickable block used to get data of forms to bve displayed in ApplicationReadForm
const ApplicationCard = (props) => {
  
// form id to find names
  const handleClick = () => {
    props.handleApplicationData(props.application);
  }
  const [user,setUser]=useState({})
  useEffect(()=>{
    fetch("http://localhost:3001/user/querybyid/"+props.application.from)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setUser(data);
    });
  },[])
  if(user==null){
  return <div></div>
  }
  return (
    <HorizontalBlock style={appCardBody}>
      <HorizontalBlock  >  
        <button onClick={handleClick}style={cardButton} >
          <HorizontalBlock>
         <div style={profImg}><img src={userImg} /></div>
         <ColumnBlock >
           
              {/* shows data of form submittees */}
              <input type="text" value={props.application.topic} disabled readOnly style={profInfo}/>
              <input type="text" value={user.id} readOnly disabled style={profInfo}/>
            
         </ColumnBlock></HorizontalBlock> </button>
        </HorizontalBlock>
        {/* to check mark data */}
        <input style={checkbox} onChange={(e)=>{
          props.setCount(e.target.checked?props.count+1:props.count-1)
          if(e.target.checked){
            // console.log(e.target.checked)
            props.setSelected([...props.selected,props.formId])
            // console.log(props.selected)
          }else{
            props.setSelected(props.selected.filter((id)=>id!==props.application.formId))
          }
          // console.log(props.count)
        }}  type="checkbox"/>
        {/* to delete data */}
        <RemoveButton formId={props.formId} body={<IoTrashSharp/>}/>
       
    </HorizontalBlock>
  )
}

export default ApplicationCard

const appCardBody={
  display: "flex",
    border: "1px solid"+PrimaryTemplate.borders,
    margin: "2.5%",
    position: 'relative',
    height:"auto",
    alignItems:'left',
   justifyContent:'left',
   textAlign:'left',
   justifyContent:"space-between",
   backgroundColor:PrimaryTemplate.white
    
}

const profImg={
  width: "auto",
  position:"relative",
  
}

const profInfo={
  fontSize: "large",
  fontWeight: "600",
  fontFamily: "'Inder', sans-serif",
  width:"90%",
  border:"none",
  background:"none"
}

const checkbox={
  border:"1px solid"+PrimaryTemplate.borders+"!important"
}

const cardButton={
  border:"none",
  backGroundColor:PrimaryTemplate.white,
  padding: '0',
  border: '0',
  background: 'none',
  boxShadow: 'none',
}