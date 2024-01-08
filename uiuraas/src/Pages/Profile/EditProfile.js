import React,{useEffect, useState} from 'react'
import Img from '../../Images/userImg.png'
import VerticalBlock from '../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../Components/ColorTemplates/PrimaryTemplate'
import Papers from './ProfilePageComponents/Papers'
import PastExperience from './ProfilePageComponents/PastExperience'
import AddPaperButton from './ProfilePageComponents/AddPaperButton'
import AddPastExperience from './ProfilePageComponents/AddPastExperience'
import RowBlock from "../../Components/BasicBlocks/RowBlock"
import { useSelector } from "react-redux";

//To updata user data. hold necessary components to update data

function EditProfile(props){
  const user=useSelector((state) => state.auth.userInfo);
    const [userImg, setUserImg] = useState(Img);
    console.log(user)
    const handleFileSelect = (event) => {
      const file = event.target.files[0];
  
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImg(reader.result);
      };
      reader.readAsDataURL(file);
    };

    const [numColumns, setNumColumns] = useState(2);


    useEffect(() => {
      function handleResize() {
        const windowWidth = window.innerWidth;

            if (windowWidth < 768) {
            setNumColumns(1);
          } else  {
            setNumColumns(2);
          } 
        
      }

      window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // cleanup function to remove event listener on component unmount
  }, []);
    
    return (
      <div >
      <h2 style={{paddingLeft:"2%",paddingTop:"1%"}}>Update User Data</h2>
      <VerticalBlock> 
        <RowBlock style={{...profCardBody,display: "grid", gridTemplateColumns: `repeat(${numColumns}, 1fr)`}}>
          <VerticalBlock style={{paddingLeft:"3%",paddingTop:"2%"}}>{/* To get image from pc and updata data */}
          <form>
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
              <br/>
              <button type="submit" style={{...saveButton,marginTop:"1%"}}>Save</button>
             </form>
            
            </VerticalBlock >{/* To get image from pc and updata data */}
            <VerticalBlock style={{paddingLeft:"3%",paddingTop:"2%"}}>
              <form >{/* To get change password */}
                <h5>Change Password</h5><br/>
                <input type="password" name="uname" placeholder='Enter Old Password '  style={{...inputField,marginTop:"-12px"}}  />
                <input type="password" name="uname" placeholder='Enter New Password '  style={inputField}  />
                <input type="password" name="uname" placeholder='Confirm New Password '  style={inputField}  />
                <br/>
                <button type="submit" style={saveButton}>Save</button>
              </form>{/* To get change password */}
          </VerticalBlock>
        </RowBlock>
        <PastExperience style={pastexp} body={<AddPastExperience/>} id={user.userToken} location="edit" width="75vw"/>
        <Papers body={<AddPaperButton/>} id={user.userToken}/>

      </VerticalBlock> 
      </div >
    );
  }

export default EditProfile


const profCardBody={
    display: "flex",
    border: "1px solid"+PrimaryTemplate.borders,
    margin: "2.5%",
    position: 'relative',
    height:"auto",
    width:"75vw",
    alignItem:"center",
    justifyContent:"space-between",
    backgroundColor:PrimaryTemplate.white
      
  }
  
  const profImg={
    width: "200px",
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
    width:'83.5vw',
    height:"auto"
  }