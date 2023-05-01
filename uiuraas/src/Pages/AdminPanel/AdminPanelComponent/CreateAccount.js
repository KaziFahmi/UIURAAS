import React from 'react'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
//used for creating news
function CreateAccount(props) {
  return (
    <VerticalBlock style={profCardBody}>
        <VerticalBlock>
        <form>
           <h2 style={{paddingLeft:"1%",marginBottom:"1%",marginTop:"1%"}}>Create Account</h2>
           <label style={title} >Account Type</label>{/* Link of news*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Account Type '  style={inputField} />
           <br/>

           <label style={title} >Name</label>{/* Title of news*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Name '  style={inputField} />
           <br/>
           
           <label style={title} >Id</label>{/* Link of news*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Id '  style={inputField} />
           <br/>
           <label style={title} >Password</label>{/* Link of news*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Password '  style={inputField} />
           <br/>
           <button type="submit" style={saveButton}>Create</button>
        </form>
        </VerticalBlock>

     
  </VerticalBlock>

  )
}

export default CreateAccount

const profCardBody={
    display: "flex",
    border: "1px solid"+PrimaryTemplate.borders,
    margin: "2.5%",
    position: 'relative',
    height:"auto",
    width:"83vw",
    alignItems:'left',
    textAlign:'left',
    justifyContent:"space-between",
    fontFamily: "'Inder', sans-serif",
    backgroundColor:PrimaryTemplate.white
      
  }
  
  const inputField={
    width: "75vw",
    border: "1px solid "+PrimaryTemplate.borders,
    marginBottom: "15px",
    color: "#000000c2",
    fontSize: "18px",
    marginLeft:"15px"
  }

  const title ={
    fontSize: "20px",
    marginBottom: "20px",
    color:PrimaryTemplate.blue,
    fontFamily: "'Inder', sans-serif",
    marginLeft:"15px"
  }

  const saveButton={
    width:"120px",
    height:"50px",
    padding:"15px",
    marginLeft:"1%",
    marginBottom:"10px",
    backgroundColor:  PrimaryTemplate.blue ,
    color: "white",
    border: "1px solid"+PrimaryTemplate.blue,
    borderRadius:"12px",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
  }
