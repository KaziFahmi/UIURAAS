import React,{useState} from 'react'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
//used for creating news
function CreateNews(props) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const onSubmit = (e) => {
    // console.log(title)
    // console.log(link)
    e.preventDefault();
    //Add paper function
    fetch('http://localhost:3001/news/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, link}),
    })
      .then(res => res.json())  
      .then(data => {
        // console.log(data)
        if (data.success) {
          alert('news added successfully');
          window.location.reload();
        } else {
          alert(data.message);
        }
      })
      .catch(err => {
        console.log(err);
      }
      )

  }

  return (
    
    <VerticalBlock style={profCardBody}>
        <VerticalBlock>
        <form onSubmit={onSubmit}>
            <h2 style={{paddingLeft:"1%"}}>Create News</h2>
           <label style={titleStyle} >Title</label>{/* Title of news*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Title '  style={inputField} onChange={(e) => setTitle(e.target.value)} />{/* Title of news*/}
           <br/>
           <label style={titleStyle} >Link</label>{/* Link of news*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Link '  style={inputField} onChange={(e) => setLink(e.target.value)} />{/* Link of news*/}
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

  const titleStyle ={
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