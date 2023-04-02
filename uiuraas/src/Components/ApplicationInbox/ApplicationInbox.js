import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../SideMenu/SidebarStudent'
import EmailView from './EmailView'
function ApplicationInbox() {
  return (
    <> 
   
    <div style={body}  >
        <h1>Email</h1>
        <div  >
            
            <div style={applicationInbox}>
                <div style={emailBody} >
                    <button style={compose}>Compose</button>
                    <div style={optionSet} >
                        <p style={options}>Inbox </p>
                        <br/>
                        <p style={options}>Starred </p>
                        <br/>
                        <p style={options}>Snozzed </p>
                        <br/>
                        <p style={options}>Sent </p>
                        <br/>
                        <p style={options}>Drafts </p>
                        <br/>
                        <p style={options}>More</p>
                    </div>
                    <div>
                        <EmailView/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default ApplicationInbox
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