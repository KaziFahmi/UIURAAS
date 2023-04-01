import React from 'react'
import Members from './Members'

const ApplicationReadForm = (props) => {
  return (
    <div>
      <form className='formDataOutput'>
          <label className='dataLabel' style={dataLabel}>Topic</label><br/>
          <input type="text" value="{props.value}" readOnly/><br/>
          <label className='dataLabel' style={dataLabel}>Detail</label><br/>
          <textarea name="postContent" className='details'   style={details} rows={4} cols={40} value="{props.value} "readOnly/>
          <br/>
          <br/>
          <br/>
          <Members/>
      </form>

    </div>
  )
}

export default ApplicationReadForm


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
