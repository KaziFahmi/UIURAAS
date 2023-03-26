import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import FormInput from "../../Components/Application_Write/FormInput";
import Style from "../../Styles/application_write.css";
function Application() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h2>Application</h2>
      </div>
      <div className="application">
        <p></p>
        <form>
          <FormInput placeholder="Researcher" />
          <FormInput placeholder="Field" />
          <FormInput placeholder="Topic" />
          <FormInput placeholder="Details" />
          <div className="ap">
            <label>Applied by</label>
            <br></br>
          </div>
          <div className="Applied">
            <br></br>
            <label>Student Id</label>
            <br></br>
            <input className="student_id" />
            &nbsp;
            <button className="button">Add Projects</button>
            <br></br>
            <label>Projects</label>
            <br></br>
            <input className="project" />
            <br />
          </div>
          <div className="add">
            <IoIosAddCircle />
            Add Collaborators
          </div>
          <br></br>
          <input type="submit" value="Apply"></input>
        </form>
      </div>
    </>
  );
}

export default Application;