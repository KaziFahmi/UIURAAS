import React from "react";
import "../../Styles/application_write.css"

function FormInput(props) {
  return (
    <div className="fromInput">
      <label>{props.placeholder}</label>
      <br />
      <input type="text" />
      <br></br>
    </div>
  );
}

export default FormInput;