import React from 'react'

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
    color: "#949494",
    marginLeft: "10%",
    fontFamily: "'Inder', sans-serif"
  }
  
  const formOutputField=
  {
      width:"80%",
      border:'none',
      color: "#000000c2",
      fontSize: "18px",
      marginLeft: "10%"
  }