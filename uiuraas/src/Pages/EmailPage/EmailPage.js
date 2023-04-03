import React from 'react'
import ApplicationInbox from './ApplicationInbox/ApplicationInbox'
import EmailView from './ApplicationInbox/EmailView'
import Common from '../../Layout/Common'

function EmailPage() {
  return (
    <Common>
    <div style={body}  >
        <ApplicationInbox/>
    </div></Common>
  )
}
export default EmailPage
const body={
    //backgroundColor:"red",
}

const emailBody={
    display:"flex",
    justifyContent:"space-between"
}

const optionSet={
    display:"flex",
    marginRight:".5%"
    
}
const options={
    borderLeft:"10px solid white",
    color:" #FC9E04"
}

const applicationInbox={
    border:" 1px solid #FC9E04",
    justifyContent: "flex-start",
    width: "80vw",
    height:"80vh"
  }

  const compose={
    backgroundColor:"#FC9E04",
    borderRadius:"15px",
    border:"none",
    width:"5%",
    color:"white",
    marginTop:".5%",
    marginLeft:".5%"
  }