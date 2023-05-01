import React from 'react'
import FormOutput from './FormOutput'
import RowBlock from '../../../../Components/BasicBlocks/RowBlock'
import PrimaryTemplate from '../../../../Components/ColorTemplates/PrimaryTemplate'
//Displays eperate data of individual(s) who submitted a form
const Members = (props) => {
  return (
    <form>
        <FormOutput placeholder="Name" value={props.member.name} />
        <FormOutput placeholder="Student Id" value={props.member.id} />
        <RowBlock  style={studentData}>
            <FormOutput placeholder="CGPA" value={props.member.cgpa} />
            <FormOutput placeholder="Trimester" value={props.member.current_trimester} style={{marginLeft:"30%"}} />
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
  color:PrimaryTemplate.blue,
  marginLeft: "50px",
  fontFamily: "'Inder', sans-serif"
}

const studentData={
 width:"90%",

}

const details={
  color: PrimaryTemplate.grey,
  border: "1px solid"+PrimaryTemplate.borders,
  marginLeft: "50px",
  width:"90%",
  fontFamily: "'Inder', sans-serif"
}