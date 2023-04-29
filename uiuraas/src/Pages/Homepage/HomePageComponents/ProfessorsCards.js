import React, { useState } from 'react'
import userImg from '../../../Images/userImg.png'
import ColumnBlock from '../../../Components/BasicBlocks/ColumnBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import {Link} from 'react-router-dom'
//Cards holding professor relevant data. requires some functions
const ProfessorsCards = (props) => {
  const [keyword, setKeyword] = useState('')

  return (
    <HorizontalBlock style={appCardBody}>
      <HorizontalBlock  >  
        <div style={profImg}><img src={userImg} /></div>
        <Link to={`/profile/${props.id}`} style={cardButton} >
        <ColumnBlock >
            
              <input type="text" value={props.name} disabled readOnly style={profInfo}/>
              <HorizontalBlock style={{marginLeft:"1%"}}>
                <label >Keyword: </label>
                {props.keywords.map((keyword, index) => (
                  <div key={index}>
                    <a href="#" onClick={() => setKeyword(keyword)}>{keyword},</a>
                    &nbsp;
                  </div>
                ))}
                {/* <input type="text" value={keyword} disabled readOnly style={input_keyword} /> */}
                </HorizontalBlock>
           
         </ColumnBlock>
          </Link>
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
const input_keyword={
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