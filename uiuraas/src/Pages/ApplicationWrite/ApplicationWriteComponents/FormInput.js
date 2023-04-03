import React from "react";

function FormInput(props) {
  return (
    <div className="fromInput">
      <label style={formInputLabel}>{props.placeholder}</label>
      <br />
      <input style={formInputField} type="text" />
      <br></br>
    </div>
  );
}

export default FormInput;

const formInputLabel={
        color: "#949494",
        marginLeft: "50px",
        fontFamily: "'Inder', sans-serif"

}

const formInputField=
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