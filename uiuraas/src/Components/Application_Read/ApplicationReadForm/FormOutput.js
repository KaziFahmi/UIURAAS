import React from "react";


function FormOutput(props) {
  return (
    <div className="formOutput" style={formOutput}>
      <label className="dataLabel">{props.placeholder}</label>
      <br />
      <input type="text" value={props.value}readOnly/><br/>
    </div>
  );
}

export default FormOutput;

const formOutput={
  paddingTop: "1%"
}