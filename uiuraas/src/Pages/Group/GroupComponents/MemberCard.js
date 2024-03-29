import React, { useEffect ,useState} from 'react'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import ColumnBlock from '../../../Components/BasicBlocks/ColumnBlock'
import groupImg from '../../../Images/userImg.png'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import {Link} from 'react-router-dom'
//Displays data of members
const MemberCard = (props) => {
  const [user,setUserData] = useState({});
  useEffect(()=>{
    fetch("http://localhost:3001/user/querybytoken/"+props.name).then((data)=>data.json()).then((data)=>setUserData(data));
  },[props.name])
  
  return (
    <HorizontalBlock style={groupBody}>
    <HorizontalBlock  > 
      <Link  style={cardButton} > 
      <HorizontalBlock>
      <img src={groupImg} style={profImg} />
      <ColumnBlock >
          
            <input type="text" value={user.name} disabled readOnly style={profInfo}/>
            <input type="text" value={user.id} readOnly disabled style={profInfo} />
            <input type="text" value={user.email} readOnly disabled style={profInfo} />
          
       </ColumnBlock></HorizontalBlock></Link>
      </HorizontalBlock>
     
  </HorizontalBlock>
  )
}

export default MemberCard

const groupBody={
    display: "flex",
    border: "1px solid"+PrimaryTemplate.borders,
    margin: "2.5%",
    position: 'relative',
    height:"auto",
    alignItems:'left',
    textAlign:'left',
    justifyContent:"space-between",
    marginTop:"2%"
  }
  
  const profImg={
    width: "auto",
    position:"relative",
    width: "5vw",
    
    
  }
  
  const profInfo={
    fontSize: "large",
    fontWeight: "600",
    fontFamily: "'Inder', sans-serif",
    width:"90%",
    border:"none",
    background:"none"
  }
  
  
  const cardButton={
    border:"none",
    background:"none",
    padding: '0',
    background: 'none',
    boxShadow: 'none',
    textDecoration:"none",
    width:"23vw"
  }