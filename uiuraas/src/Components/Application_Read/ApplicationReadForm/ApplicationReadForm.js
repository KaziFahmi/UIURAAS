import React from 'react'
import Members from './Members'

const ApplicationReadForm = (props) => {
  return (
    <div>
      <form className='formDataOutput'>
          <label className='dataLabel'>Topic</label><br/>
          <input type="text" value="{props.value}" readOnly/><br/>
          <label className='dataLabel'>Detail</label><br/>
          <textarea name="postContent" className='details' rows={4} cols={40} value="{props.value} "readOnly/>
          <br/>
          <br/>
          <br/>
          <Members/>
      </form>

    </div>
  )
}

export default ApplicationReadForm