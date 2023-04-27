import React,{useState} from 'react'
import Img from '../../Images/userImg.png'
import VerticalBlock from '../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../Components/ColorTemplates/PrimaryTemplate'
import Papers from './ProfilePageComponents/Papers'
import PastExperience from './ProfilePageComponents/PastExperience'
import AddPaperButton from './ProfilePageComponents/AddPaperButton'
import AddPastExperience from './ProfilePageComponents/AddPastExperience'
import RowBlock from "../../Components/BasicBlocks/RowBlock"

//To updata user data. hold necessary components to update data

function EditProfile(props){
    const [userImg, setUserImg] = useState(Img);
  
    const handleFileSelect = (event) => {
      const file = event.target.files[0];
  
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImg(reader.result);
      };
      reader.readAsDataURL(file);
    };
  
    return (
      <>
      <h2 style={{paddingLeft:"2%"}}>Update User Data</h2>
      <VerticalBlock> 
        <RowBlock style={profCardBody}>
          <VerticalBlock style={{paddingLeft:"3%"}}>{/* To get image from pc and updata data */}
            <h5>Change Profile Picture</h5><br/>
            <img src={userImg} style={profImg} /> 
            <br/>
         
            <input
            style={profileEdit}
            type="file"
            id="upload"
            accept="image/*"
            onChange={handleFileSelect}
            />
             <button type="submit" style={{...saveButton,marginTop:"1%"}}>Save</button>
            
            </VerticalBlock>{/* To get image from pc and updata data */}
          <form >{/* To get change password */}
            <h5>Change Password</h5><br/>
            <input type="text" name="uname" placeholder='Enter Old Password '  style={inputField}  />
            <input type="text" name="uname" placeholder='Enter New Password '  style={inputField}  />
            <br/>
            <button type="submit" style={saveButton}>Save</button>
          </form>{/* To get change password */}
        </RowBlock>
        <PastExperience style={pastexp} body={<AddPastExperience/>}/>
        <Papers body={<AddPaperButton/>}/>

      </VerticalBlock> 
      </>
    );
  }

export default EditProfile


const profCardBody={
    display: "flex",
    border: "1px solid"+PrimaryTemplate.yellow,
    margin: "2.5%",
    position: 'relative',
    height:"30vh",
    width:"83vw",
    alignItem:"center",
    justifyContent:"space-between"
      
  }
  
  const profImg={
    width: "7.5vw",
    height:'14vh',
  }
  
  const inputField={
  width: "75%",
  padding: "15px",
  border: "2px solid "+PrimaryTemplate.gray58,
  marginTop: "10px",
  marginBottom: "15px",
  color: "#000000c2",
  fontSize: "18px",
}

  const profileEdit={
    alignSelf: 'flex-end',
    fontSize:"100%",
    marginBottom:"2px",
    marginLeft:"3%"
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

  const pastexp={
    width:'83.5vw'
  }