import React from 'react'
import FormOutput from './FormOutput'
import RowBlock from '../../../../Components/BasicBlocks/RowBlock'

const Members = (props) => {
  return (
    <form>
        <FormOutput placeholder="Name" value="Shahil Yasar Haque" />
        <FormOutput placeholder="Student Id" value="0110201021" />
        <RowBlock  style={studentData}>
            <FormOutput placeholder="CGPA" value="" />
            <FormOutput placeholder="Trimester" value="0110201021" />
        </RowBlock>
        <label  style={dataLabel}>Links</label><br/>
        <textarea name="postContent" style={details} rows={4} cols={40} value="{props.value} "readOnly/>
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