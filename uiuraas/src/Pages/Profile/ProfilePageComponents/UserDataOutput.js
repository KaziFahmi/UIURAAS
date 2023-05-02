import React from 'react'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
// A reusable componentr to output data
function UserDataOutput(props) {
  return (
    <div  style={formOutput}>
    <label  style={dataLabel}>{props.placeholder}</label>
    <br />
    <input type='text' readOnly  style={formOutputField} value={props.value}/><br/>
  </div>
  )
}

export default UserDataOutput

const formOutput={
    paddingTop: "1%"
  }
  
  
  const dataLabel={
    color: PrimaryTemplate.blue,
    marginLeft: "10%",
    fontWeight: 600,
    fontFamily: "'Inder', sans-serif"
  }
  
  const formOutputField=
  {
      width:"80%",
      border:'none',
      color: "#000000c2",
      fontSize: "18px",
      marginLeft: "10%",
      borderLeft: "2px solid rgb(11, 128, 218)",
  }