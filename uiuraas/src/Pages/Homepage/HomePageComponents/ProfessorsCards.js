import React, { useEffect, useState } from 'react'
import userImg from '../../../Images/userImg.png'
import ColumnBlock from '../../../Components/BasicBlocks/ColumnBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import {Link} from 'react-router-dom'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
//Cards holding professor relevant data. requires some functions
const ProfessorsCards = (props) => {
  const [keyword, setKeyword] = useState('')
  const [labelFontSize, setLabelFontSize] = useState(16);
  const [numColumns, setNumColumns] = useState(3);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.screen.width;
      const windowWidth = window.innerWidth;

      if (screenWidth < 768) {
        // for mobile screens
        setLabelFontSize(screenWidth <= 480 ? 14: 16);
      } else {
        // for desktop screens
        setLabelFontSize(windowWidth >= 768 ? 16 : 14);
      }

      if (windowWidth < 768) {
        setNumColumns(1);
      } else if (windowWidth < 992) {
        setNumColumns(2);
      } else{
        setNumColumns(3);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // cleanup function to remove event listener on component unmount
  }, []);


  

  return (
    <HorizontalBlock style={appCardBody}> 
    <Link to={`/profile/${props.id}`} style={cardButton} >
      <ColumnBlock >  
        <img src={userImg} style={profImg} />
       
        <ColumnBlock >
           <label style={{ ...profInfo,fontSize: `${labelFontSize}px` }}>{props.name}</label>
             
              <HorizontalBlock style={{marginLeft:"1%",}}>
                <label style={{marginLeft:"15px",fontSize: `${labelFontSize-2}px`,color:PrimaryTemplate.blue }}>Keyword: </label>
                <div style={{display: "grid", gridTemplateColumns: `repeat(${numColumns}, 1fr)`}}>
                  {props.keywords.map((keyword, index) => (
                    <div key={index} style={{...tagStyle}} >
                      <a href="#"  onClick={() => setKeyword(keyword)} style={{textDecoration:"none",color:PrimaryTemplate.black}}>{keyword}</a>
                      &nbsp;
                    </div>
                  ))}
                </div>
                {/* <input type="text" value={keyword} disabled readOnly style={input_keyword} /> */}
                </HorizontalBlock>
           
         </ColumnBlock>
          
        </ColumnBlock>
       </Link>
    </HorizontalBlock>
  )
}

export default ProfessorsCards

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
   width:"96%",
   paddingBottom:"5px"
    
}

const tagStyle={
  marginRight:"2%",
  borderRadius:"12px",
  border:"1px solid"+PrimaryTemplate.gray58,
  textDecoration:"none",
  textAlign:"center",
  marginBottom:"2px",
}

const profImg={
  width: "5vw",
  position:"relative",
  
}

const profInfo={
  fontSize: "large",
  fontWeight: "600",
  fontFamily: "'Inder', sans-serif",
  width:"90%",
  border:"none",
  color:PrimaryTemplate.black,
  paddingTop:"10px"
 
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
  textDecoration:"none",
}