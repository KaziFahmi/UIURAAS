import React from 'react'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
//used for creating news
function CreateNews(props) {
  return (
    <VerticalBlock style={profCardBody}>
        <VerticalBlock>
        <form>
            <h2 style={{paddingLeft:"1%"}}>Create News</h2>
           <label style={title} >Title</label>{/* Title of news*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Title '  style={inputField} />{/* Title of news*/}
           <br/>
           <label style={title} >Link</label>{/* Link of news*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Link '  style={inputField} />{/* Link of news*/}
           <br/>
           <button type="submit" style={saveButton}>Publish</button>
        </form>
        </VerticalBlock>

     
  </VerticalBlock>

  )
}

export default CreateNews

const profCardBody={
    display: "flex",
    border: "1px solid"+PrimaryTemplate.yellow,
    margin: "2.5%",
    position: 'relative',
    height:"33vh",
    width:"83vw",
    alignItems:'left',
    textAlign:'left',
    justifyContent:"space-between",
    fontFamily: "'Inter', sans-serif",
      
  }
  
  const inputField={
    width: "75vw",
    border: "2px solid "+PrimaryTemplate.gray58,
    marginBottom: "15px",
    color: "#000000c2",
    fontSize: "18px",
    marginLeft:"15px"
  }

  const title ={
    fontSize: "20px",
    marginBottom: "20px",
    color:PrimaryTemplate.blue,
    fontFamily: "'Inter', sans-serif",
    marginLeft:"15px"
  }

  const saveButton={
    width:"120px",
    height:"50px",
    padding:"15px",
    marginLeft:"2.5%",
    marginBottom:"5px",
    backgroundColor:  PrimaryTemplate.blue ,
    color: "white",
    border: "1px solid"+PrimaryTemplate.blue,
    borderRadius:"12px",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
  }