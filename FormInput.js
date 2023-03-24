import React from "react";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inder&display=swap');
</style>;
//import "../Styles/Styles.css";
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
