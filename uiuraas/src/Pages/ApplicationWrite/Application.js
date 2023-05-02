import React, { useEffect,useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import FormInput from "./ApplicationWriteComponents/FormInput";
import PrimaryTemplate from "../../Components/ColorTemplates/PrimaryTemplate";
import MembersAW from "./ApplicationWriteComponents/MembersAW";

function Application() {
  const [members, setMembers] = React.useState([]);
  const [changed, setChanged] = React.useState(false);
  const onClickAdd = (e ) => {
    e.preventDefault();
    console.log(e.target, members);
    setMembers([...members, {}]);
  };
  const onChange = (members) => {
    // e.preventDefault();
    setMembers(members);
    setChanged(!changed);
  };
  useState(() => {
    console.log(members);
  }, [changed]);
  return (
    <div style={body}>
        <div ><h2 style={{marginTop:"11px",paddingLeft:"1%"}}>Application</h2></div>

      <div className="application" style={application}>
        <p></p>
        <form>
          <FormInput placeholder="Researcher" />
          <FormInput placeholder="Field" />
          <FormInput placeholder="Topic" />
          <FormInput placeholder="Details" />
          {members.map((member, index) => (
            <MembersAW key={index} onChange={onChange} members={members} />
          ))}
          <button className="add" style={add} onClick={onClickAdd}>
            <IoIosAddCircle />
            Add
          </button>
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
  width:"77vw"
}

const application={
  width: "75vw",
  margin:"auto",
  border: "1px solid"+PrimaryTemplate.borders,
  position:"relative",
  backgroundColor:PrimaryTemplate.white
}

const submitForm={
  width:" 20%",
  height:"40px",
  marginBottom:" 15px",
  color: "#fff",
  backgroundColor: PrimaryTemplate.blue,
  fontSize:" 18px",
  marginLeft: "23vw",
  borderRadius:" 10px",
  fontFamily: "'Inder', sans-serif",
  
}


const add={
  color:" #000",
  fontFamily: "'Inder', sans-serif",
  border:"none",
  background:"none",
  marginLeft:"3%"
}
