import React, { useEffect, useState } from "react";
import Members from "./Members";
import { set } from "react-hook-form";
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
};

const dataLabel = {
  color: "#949494",
  marginLeft: "50px",
  fontFamily: "'Inder', sans-serif",
};

const details = {
  color: "#949494",
  border: "2px solid #949494",
  marginLeft: "50px",
  width: "78%",
  fontFamily: "'Inder', sans-serif",
};

const formOutputField = {
  width: "75%",
  padding: "10px 15px",
  border: "2px solid #949494",
  marginTop: "10px",
  marginBottom: "15px",
  color: "#000000c2",
  fontSize: "18px",
  marginLeft: "50px",
};
