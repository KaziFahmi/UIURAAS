import React from 'react'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'

function MembersAW(props) {
  const onChange = (e)=>{
    let members = props.members;
    members[props.id]=e.target.value;
    props.onChange(members);
    console.log(members);
  }
  return (
    <div><div className="ap" style={ap}>
    <label>Applied by</label>
    <br></br>
  </div>
  <div className="Applied" style={Applied}>
    <br></br>
    <label>Student Id</label>
    <br></br>
    <input className="student_id" style={AppliedInput} onChange={onChange} />
    &nbsp;
    <br />
  </div></div>
  )
}

export default MembersAW

const Applied={
    /*color: #949494;*/
    marginTop: "10px",
    marginLeft: "3.5%",
    border: "1px solid"+PrimaryTemplate.borders,
    color: PrimaryTemplate.gray58,
    width:"90%",
    paddingLeft: "20px",
    fontFamily: "'Inder', sans-serif"
   
  }
  const AppliedInput=
  {
    width: "98%",
    height: "90%",
    padding: "10px 15px",
    border: "1px solid"+PrimaryTemplate.borders,
    marginTop: "10px",
    marginBottom: "15px",
    color: PrimaryTemplate.gray58,
    fontSize: "18px",
    marginLeft: "-2px"
    
  }
  const ap={
    color: PrimaryTemplate.blue,
    paddingLeft: "50px",
    fontFamily: "'Inder', sans-serif"
  }

  const buttonStyle={
    backgroundColor: "#14213D",
    color:"#fff",
    borderRadius: "5px",
    fontFamily: "'Inder', sans-serif",
    border:"none",
    background:"none"
  }