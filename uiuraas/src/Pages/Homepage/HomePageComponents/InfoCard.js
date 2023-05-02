import React from 'react'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock';
import ColumnBlock from '../../../Components/BasicBlocks/ColumnBlock';
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate';

function InfoCard(props) {
    function handleClick() {
        window.open(props.link, '_blank', 'noopener,noreferrer');
      }
      return (
        <HorizontalBlock style={appCardBody}>
          <button onClick={handleClick} style={cardButton} > {props.title}</button>
        </HorizontalBlock>
        
  )
}

export default InfoCard

const appCardBody={
    display: "flex",
    border: "1px solid"+PrimaryTemplate.borders,
    margin: "2.5%",
    position: 'relative',
    height:"40px",
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    justifyContent:"space-between",
    width:"95%",
    background: 'none',
      
  }

  const cardButton={
    border:"none",
    backGroundColor:PrimaryTemplate.white,
    padding: '0',
    border: '0',
    boxShadow: 'none',
    background:"none",
    width:"100%",
    height:"40px",
    textAlign:"left",
    marginLeft:"2%"
  }
  
 