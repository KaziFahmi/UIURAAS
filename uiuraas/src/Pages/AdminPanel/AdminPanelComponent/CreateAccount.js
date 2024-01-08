import React, { useState } from 'react'
import HorizontalBlock from '../../../Components/BasicBlocks/HorizontalBlock'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
//used for creating news
function CreateAccount(props) {
 const [type,setAccountType]=useState('')
 const [name,setName]=useState('')
 const [id,setId]=useState('')
 const [password,setPassword]=useState('')
 const [jobPost,setJobPost]=useState('')
 const [keyword,setKeyword]=useState([])
 const [email,setEmail]=useState('')




  const onSubmit = (e) => {
    // console.log(title)
    // console.log(link)
    e.preventDefault();
    //Add paper function
    fetch('http://localhost:3001/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({ type, name,id,password,jobPost,keyword,email}),
    })
      .then(res => res.json())  
      .then(data => {
        // console.log(data)
        if (data.success) {
          alert('Account created');
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
           <h2 style={{paddingLeft:"1%",marginBottom:"1%",marginTop:"1%"}}>Create Account</h2>
           <label style={title} >Account Type</label>{/* Link of news*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Account Type '  style={inputField} onChange={(e) => setAccountType(e.target.value)} />
           <br/>

           <label style={title} >Name</label>{/* Title of news*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Name '  style={inputField} onChange={(e) => setName(e.target.value)}/>
           <br/>
           <label style={title} >Email</label>{/* Title of news*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Email '  style={inputField} onChange={(e) => setEmail(e.target.value)}/>
           <br/>
           <label style={title} >Id</label>{/* Link of news*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Id '  style={inputField} onChange={(e) => setId(e.target.value)} />
           <br/>
           <label style={title} >Password</label>{/* Link of news*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Password '  style={inputField} onChange={(e) => setPassword(e.target.value)}/>
           <br/>
           <label style={title} >Job Post (Only for Professor)</label>{/* Link of news*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Job Post '  style={inputField} onChange={(e) => setJobPost(e.target.value)}/>
           <br/>
           <label style={title} >Keyword (Only for Professor)</label>{/* Link of news*/}
           <br/>
           <input type="text" name="uname" placeholder='Enter Keyword '  style={inputField} onChange={(e) => setKeyword(e.target.value)}/>
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
