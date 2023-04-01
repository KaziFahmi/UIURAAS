import React from "react";

function FormInput(props) {
  return (
    <div className="fromInput">
      <label style={formInputLabel}>{props.placeholder}</label>
      <br />
      <input type="text" />
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