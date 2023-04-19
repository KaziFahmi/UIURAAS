import React from 'react'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock';
import ColumnBlock from '../../../Components/BasicBlocks/ColumnBlock';
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate';

function InfoCard(props) {
    function handleClick() {
        window.location.href = "/";
      }
      return (
        <HorizontalBlock style={appCardBody}>
          <button onClick={handleClick} style={cardButton} > {props.data}</button>
        </HorizontalBlock>
        
  )
}

export default InfoCard

const appCardBody={
    display: "flex",
    border: "1px solid"+PrimaryTemplate.yellow,
    margin: "2.5%",
    position: 'relative',
    height:"10%",
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    justifyContent:"space-between",
    width:"95%"
      
  }

  const cardButton={
    border:"none",
    backGroundColor:PrimaryTemplate.white,
    padding: '0',
    border: '0',
    background: 'none',
    boxShadow: 'none',
  }
  
 