import React,{useState} from 'react'
import Img from '../../Images/userImg.png'
import HorizontalBlock from '../../Components/BasicBlocks/HorizontalBlock'
import VerticalBlock from '../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../Components/ColorTemplates/PrimaryTemplate'
import Papers from './ProfilePageComponents/Papers'
import PastExperience from './ProfilePageComponents/PastExperience'
import { IoIosAddCircle } from 'react-icons/io'
import AddPaperButton from './ProfilePageComponents/AddPaperButton'
import AddPastExperience from './ProfilePageComponents/AddPastExperience'



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
      <VerticalBlock> 
        <VerticalBlock style={profCardBody}>
            <img src={userImg} style={profImg} /> 
            <br/>
            <input
            style={profileEdit}
            type="file"
            id="upload"
            accept="image/*"
            onChange={handleFileSelect}
            />
        </VerticalBlock>
        <PastExperience style={pastexp} body={<AddPastExperience/>}/>
        <Papers body={<AddPaperButton/>}/>

      </VerticalBlock> 
    );
  }

export default EditProfile


const profCardBody={
    display: "flex",
    border: "1px solid"+PrimaryTemplate.yellow,
    margin: "2.5%",
    position: 'relative',
    height:"20vh",
    width:"83vw",
    alignItem:"center",
    justifyContent:"center"
      
  }
  
  const profImg={
    width: "10vw",
    height:'20vh',
    position:"relative",
    
  }
  
  const profInfo={
    fontSize: "4.5vh",
    fontWeight: "600",
    fontFamily: "'Inter', sans-serif",
    color:PrimaryTemplate.blue,
    width:"70%",
    border:"none",
  }

  const profileEdit={
    alignSelf: 'flex-end',
    fontSize:"100%",
    marginBottom:"2px",
  }

  const profItem={
    justifyContent:"center",
    width:"90vw"
  }

  const pastexp={
    width:'83.5vw'
  }