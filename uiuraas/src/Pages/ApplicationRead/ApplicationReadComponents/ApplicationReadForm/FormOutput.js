import React from "react";
import PrimaryTemplate from "../../../../Components/ColorTemplates/PrimaryTemplate";
//reusable component to output form data

function FormOutput(props) {
  return (
    <div className="formOutput" style={formOutput}>
      <label className="dataLabel" style={{...dataLabel,...props.style}}>{props.placeholder}</label>
      <br />
      <input type="text" value={props.value} readOnly style={{...formOutputField,...props.style}}/><br/>
    </div>
  );
}

export default FormOutput;

const formOutput={
  paddingTop: "1%"
}


const dataLabel={
  color:PrimaryTemplate.blue,
  marginLeft: "50px",
  fontFamily: "'Inder', sans-serif"
}

const formOutputField=
{
    width: "90%",
    padding: "10px 15px",
    border: "1px solid "+PrimaryTemplate.borders,
    marginTop: "10px",
    marginBottom: "15px",
    color: PrimaryTemplate.grey,
    fontSize: "18px",
    marginLeft: "50px"
}