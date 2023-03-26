import React from "react";
import "../../../Styles/application_read.css"

function FormOutput(props) {
  return (
    <div className="formOutput">
      <label className="dataLabel">{props.placeholder}</label>
      <br />
      <input type="text" value={props.value}readOnly/><br/>
    </div>
  );
}

export default FormOutput;