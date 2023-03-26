import React from 'react'
import FormOutput from './FormOutput'

const Members = (props) => {
  return (
    <form>
        <FormOutput placeholder="Name" value="Shahil Yasar Haque" />
        <FormOutput placeholder="Student Id" value="0110201021" />
        <div className='studentData'>
            <FormOutput placeholder="CGPA" value="" />
            <FormOutput placeholder="Trimester" value="0110201021" />
        </div>
        <label className='dataLabel'>Links</label><br/>
        <textarea name="postContent" className='details' rows={4} cols={40} value="{props.value} "readOnly/>
        <br/>
        <br/>
        <hr/>
        <br/>

    </form>
  )
}

export default Members