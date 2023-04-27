import React from 'react'
import FormOutput from './FormOutput'
import RowBlock from '../../../../Components/BasicBlocks/RowBlock'
//Displays eperate data of individual(s) who submitted a form
const Members = (props) => {
  return (
    <form>
        <FormOutput placeholder="Name" value={props.name} />
        <FormOutput placeholder="Student Id" value={props.id} />
        <RowBlock  style={studentData}>
            <FormOutput placeholder="CGPA" value={props.cgpa} />
            <FormOutput placeholder="Trimester" value={props.trimester} />
        </RowBlock>
        <label  style={dataLabel}>Links</label><br/>
        <textarea name="postContent" style={details} rows={4} cols={40} value={props.link} readOnly/>
        <br/>
        <br/>
        <hr/>
        <br/>

    </form>
  )
}

export default Members

const dataLabel={
  color: "#949494",
  marginLeft: "50px",
  fontFamily: "'Inder', sans-serif"
}

const studentData={
 width:"82%"
}

const details={
  color: "#949494",
  border: "2px solid #949494",
  marginLeft: "50px",
  width:"78%",
  fontFamily: "'Inder', sans-serif"
}