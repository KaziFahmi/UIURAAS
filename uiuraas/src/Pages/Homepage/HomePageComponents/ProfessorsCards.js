import React from 'react'
import userImg from '../../../Images/userImg.png'
import RowBlock from '../../../Components/BasicBlocks/RowBlock'
import ColumnBlock from '../../../Components/BasicBlocks/ColumnBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'

const ProfessorsCards = (props) => {
  function handleClick() {
    window.location.href = "/";
  }
  return (
    <HorizontalBlock style={appCardBody}>
      <HorizontalBlock  >  
        <div style={profImg}><img src={userImg} /></div>
        <button onClick={handleClick} style={cardButton} >
        <ColumnBlock >
            
              <input type="text" value={props.name} disabled readOnly style={profInfo}/>
              <HorizontalBlock style={{marginLeft:"1%"}}>
                <label >Keyword: </label>
                <input type="text" value={props.keyword} disabled readOnly style={keyword} />
                </HorizontalBlock>
           
         </ColumnBlock>
          </button>
        </HorizontalBlock>
       
    </HorizontalBlock>
  )
}

export default ProfessorsCards

const appCardBody={
  display: "flex",
    border: "1px solid"+PrimaryTemplate.blue,
    margin: "2.5%",
    position: 'relative',
    height:"auto",
    alignItems:'left',
   justifyContent:'left',
   textAlign:'left',
   justifyContent:"space-between",
   width:"50%"
    
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
const keyword={
    fontFamily: "'Inter', sans-serif",
    width:"90%",
    border:"none",
  }

const cardButton={
  border:"none",
  backGroundColor:PrimaryTemplate.white,
  padding: '0',
  border: '0',
  background: 'none',
  boxShadow: 'none',
}