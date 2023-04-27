import React from "react";
//reusable component to output form data

function FormOutput(props) {
  return (
    <div className="formOutput" style={formOutput}>
      <label className="dataLabel" style={dataLabel}>{props.placeholder}</label>
      <br />
      <input type="text" value={props.value} readOnly style={formOutputField}/><br/>
    </div>
  );
}

export default FormOutput;

const formOutput={
  paddingTop: "1%"
}


const dataLabel={
  color: "#949494",
  marginLeft: "50px",
  fontFamily: "'Inder', sans-serif"
}

const formOutputField=
{
    width: "75%",
    padding: "10px 15px",
    border: "2px solid #949494",
    marginTop: "10px",
    marginBottom: "15px",
    color: "#000000c2",
    fontSize: "18px",
    marginLeft: "50px"
}