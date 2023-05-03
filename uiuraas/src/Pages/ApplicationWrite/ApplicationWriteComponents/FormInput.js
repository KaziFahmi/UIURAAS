import React from "react";
import PrimaryTemplate from "../../../Components/ColorTemplates/PrimaryTemplate";

function FormInput(props) {
  return (
    <div className="fromInput">
      <label style={formInputLabel}>{props.placeholder}</label>
      <br />
      <input style={formInputField} type="text" onChange={props.onChange}/>
      <br></br>
    </div>
  );
}

export default FormInput;

const formInputLabel={
        color: PrimaryTemplate.blue,
        marginLeft: "3.5%",
        fontFamily: "'Inder', sans-serif"

}

const formInputField=
{
    width: "90%",
    padding: "10px 15px",
    border: "1px solid"+PrimaryTemplate.borders,
    marginTop: "10px",
    marginBottom: "15px",
    color: "#000000c2",
    fontSize: "18px",
    marginLeft: "3.5%",
}