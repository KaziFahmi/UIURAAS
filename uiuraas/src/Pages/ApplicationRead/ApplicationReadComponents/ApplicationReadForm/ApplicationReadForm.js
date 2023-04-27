import React from 'react'
import Members from './Members'

const ApplicationReadForm = (props) => {
  console.log(props.formId)
  return (
    <div>
      <form className='formDataOutput' style={formBody}>
          <label className='dataLabel' style={dataLabel}>Topic</label><br/>
          <input type="text" value={props.formId.id} readOnly style={formOutputField}/><br/>
          <label className='dataLabel' style={dataLabel}>Detail</label><br/>
          <textarea name="postContent" className='details'   style={details} rows={4} cols={40} value={props.id} readOnly/>
          <br/>
          <br/>
          <br/>
          <Members/>
      </form>

    </div>
  )
}

export default ApplicationReadForm

const formBody={
  paddingTop:"2%"
}


const dataLabel={
  color: "#949494",
  marginLeft: "50px",
  fontFamily: "'Inder', sans-serif"
}

const details={
  color: "#949494",
  border: "2px solid #949494",
  marginLeft: "50px",
  width:"78%",
  fontFamily: "'Inder', sans-serif"
}

const formOutputField=
{
    width: "75%",
    padding: "10px 15px",
    border: "2px solid #949494",
    marginTop: "10px",
    marginBottom: "15px",
    color: "#000000c2",
    fontSize: "18px",
    marginLeft: "50px"
}