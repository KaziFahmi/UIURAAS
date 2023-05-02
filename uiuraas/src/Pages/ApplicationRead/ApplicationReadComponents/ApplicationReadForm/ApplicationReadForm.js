import React, { useEffect, useState } from "react";
import Members from "./Members";
import { set } from "react-hook-form";
import PrimaryTemplate from "../../../../Components/ColorTemplates/PrimaryTemplate";
//Displays form data
const ApplicationReadForm = (props) => {
  console.log(props.applicationFormData);
  // console.log(props.formId)
  const [members, setMembers] = useState([]);
  const fetchMembers = async () => {
    try {
      const memberPromises = props.applicationFormData.members.map((member) =>
        fetch("http://localhost:3001/user/querybyid/" + member)
          .then((response) => response.json())
      );
      const memberData = await Promise.all(memberPromises);
      console.log("here", memberData)
      setMembers(memberData);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log("here")
  useEffect(() => {
    fetchMembers();
  }, [props.applicationFormData]);
  return (
    <div>
      <form className="formDataOutput" style={formBody}>
        <label className="dataLabel" style={dataLabel}>
          Topic
        </label>
        <br />
        <input
          type="text"
          value={props.applicationFormData.topic}
          readOnly
          style={formOutputField}
        />
        <br />
        <label className="dataLabel" style={dataLabel}>
          Detail
        </label>
        <br />
        <textarea
          name="postContent"
          className="details"
          style={details}
          rows={4}
          cols={40}
          value={props.applicationFormData.detail}
          readOnly
        />
        <br />
        <br />
        <br />
        {members.map((member) => {
          return <Members member={member} />;
        })}
      </form>
    </div>
  );
};

export default ApplicationReadForm;

const formBody = {
  paddingTop: "2%",
  backgroundColor:PrimaryTemplate.white
};

const dataLabel = {
  color:PrimaryTemplate.blue,
  marginLeft: "50px",
  fontFamily: "'Inder', sans-serif",
};

const details = {
  color: PrimaryTemplate.grey,
  border:  "1px solid "+PrimaryTemplate.borders,
  marginLeft: "50px",
  width: "90%",
  fontFamily: "'Inder', sans-serif",
};

const formOutputField = {
  width: "90%",
  padding: "10px 15px",
  border: "1px solid "+PrimaryTemplate.borders,
  marginTop: "10px",
  marginBottom: "15px",
  color: PrimaryTemplate.grey,
  fontSize: "18px",
  marginLeft: "50px",
};
