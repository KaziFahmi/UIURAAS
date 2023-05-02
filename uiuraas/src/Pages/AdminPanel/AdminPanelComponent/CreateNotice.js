import React from 'react'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
// used for creating notices
function CreateNotice(props) {
  return (
    <VerticalBlock style={profCardBody}>
        <VerticalBlock>
        <form>
            <h2 style={{paddingLeft:"1%"}}>Create Notice</h2>
           <label style={title} >Title</label>{/* Title of Notice*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Title '  style={inputField} />{/* Title of Notice*/}
           <br/>
           <label style={title} >Detail</label>{/* Details of Notice*/}
           <br/>
           <textarea name="postContent" className='details'placeholder='Enter Details' style={inputField} rows={4} cols={40}/>{/* Details of Notice*/}
           <br/>
           <button type="submit" style={saveButton}>Send</button>
        </form>
        </VerticalBlock>

     
  </VerticalBlock>

  )
}

export default CreateNotice

const profCardBody={
    display: "flex",
    border: "1px solid"+PrimaryTemplate.borders,
    margin: "2.5%",
    position: 'relative',
    height:"auto",
    width:"77vw",
    alignItems:'left',
    textAlign:'left',
    justifyContent:"space-between",
    fontFamily: "'Inder', sans-serif",
    backgroundColor:PrimaryTemplate.white
      
  }
  
  const inputField={
    width: "70vw",
    border: "1px solid "+PrimaryTemplate.borders,
    marginBottom: "15px",
    color: "#000000c2",
    fontSize: "18px",
    marginLeft:"15px",
    height:"50px"
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