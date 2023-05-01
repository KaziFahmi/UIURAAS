import React,{useState,useEffect} from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import Experiences from './Experiences'
import Spinner from 'react-bootstrap/esm/Spinner'
//Displays all past work experiences
function PastExperience(props) {
  // console.log(props.id)
  const [experiences,setExperiences]=React.useState([])
  React.useEffect(() => {
    fetch('http://localhost:3001/pastwork/pastworks/'+props.id)
    .then(res=>res.json())
    .then(data=>setExperiences(data))
  }, [props.id])

  const [numColumns, setNumColumns] = useState(3);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;

          if (windowWidth < 768) {
          setNumColumns(1);
        } else if (windowWidth < 992) {
          setNumColumns(2);
        } else{
          setNumColumns(3);
        }
      

      
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // cleanup function to remove event listener on component unmount
  }, []);

  return (
    <>
      <VerticalBlock style={{...body,...props.style,width:props.width}}>
      <h2 style={{paddingLeft:"2.5%"}}>Activities & Experience</h2>
        <VerticalBlock style={{...experienceHolder,display: "grid", gridTemplateColumns: `repeat(${numColumns}, 1fr)`}}>
      
          {
            experiences.map(experience=>(
              <Experiences key={experience.id} experience={experience}/>
            ))

          }
         
      </VerticalBlock>
       {props.body}
  </VerticalBlock>
</>
  )
}

export default PastExperience

const body={
    height:"33vh",
    marginLeft:"2.5%",
    backgroundColor:PrimaryTemplate.white,
    border:"1px solid"+PrimaryTemplate.borders,
}
const experienceHolder={
  overflow:"auto",
  backgroundColor:PrimaryTemplate.white,
  height:"28vh",
}