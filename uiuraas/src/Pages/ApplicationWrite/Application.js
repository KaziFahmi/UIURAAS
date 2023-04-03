import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import FormInput from "./ApplicationWriteComponents/FormInput";

function Application() {
  return (
    <div style={body}>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h2>Application</h2>
      </div>
      <div className="application" style={application}>
        <p></p>
        <form>
          <FormInput placeholder="Researcher" />
          <FormInput placeholder="Field" />
          <FormInput placeholder="Topic" />
          <FormInput placeholder="Details" />
          <div className="ap" style={ap}>
            <label>Applied by</label>
            <br></br>
          </div>
          <div className="Applied" style={Applied}>
            <br></br>
            <label>Student Id</label>
            <br></br>
            <input className="student_id" style={AppliedInput} />
            &nbsp;
            <button className="button" style={button}>Add Projects</button>
            <br></br>
            <label>Projects</label>
            <br></br>
            <input className="project" style={project}/>
            <br />
          </div>
          <div className="add" style={add}>
            <IoIosAddCircle />
            Add Collaborators
          </div>
          <br></br>
          <input type="submit" value="Apply" style={submitForm}></input>
        </form>
      </div>
    </div>
  );
}

export default Application;

const body={
  //backgroundColor:"Red",
  width:"90vw"
}

const application={
  width: "35vw",
  margin:"auto",
  border: "2px solid #FC9E04",
  position:"relative",
  justifyContent:"center",
  alignItems:"center"
}
const table={
  border: "1px"
}
const submitForm={
  width:" 20%",
  padding: "10px 15px",
  border: "2px solid #14213D",
  marginBottom:" 15px",
  color: "#fff",
  backgroundColor: "#14213D",
  fontSize:" 18px",
  marginLeft: "300px",
  borderRadius:" 10px",
  fontFamily: "'Inder', sans-serif",
  
}

const inputField=
{
  width: "75%",
  padding: "10px 15px",
  border: "2px solid #949494",
  marginTop: "10px",
  marginBottom: "15px",
  color: "#000000c2",
  fontSize: "18px",
  marginLeft: "50px",
}

const fromInputlabel={
      color: "#949494",
      marginLeft: "50px",
      fontFamily: "'Inder', sans-serif "

}
const Applied={
  /*color: #949494;*/
  marginTop: "10px",
  marginLeft: "47px",
  borderStyle: "solid",
  color: "#949494",
  width:"76%",
  paddingLeft: "20px",
  fontFamily: "'Inder', sans-serif"
 
}
const AppliedInput=
{
  width: "30%",
  height: "90%",
  padding: "10px 15px",
  border: "2px solid #949494",
  marginTop: "10px",
  marginBottom: "15px",
  color: "#22d0ffc2",
  fontSize: "18px",
  marginLeft: "-2px"
  
}
const project={
  width: "70%",
  height: "90%",
  padding: "10px 15px",
  border: "2px solid #949494",
  marginTop: "10px",
  marginBottom: "15px",
  color: "#000000c2",
  fontSize: "18px",
  marginLeft: "-2px"
}
const ap={
  color: "#949494",
  paddingLeft: "50px",
  fontFamily: "'Inder', sans-serif"
}
const add={
  paddingLeft:"460px ",
  color:" #000",
  fontFamily: "'Inder', sans-serif"
}
const button={
  backgroundColor: "#14213D",
  color:"#fff",
  borderRadius: "5px",
  fontFamily: "'Inder', sans-serif"
}

