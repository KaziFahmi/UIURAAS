import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import Experiences from './Experiences'
//Displays all past work experiences
function PastExperience(props) {
  const [experiences,setExperiences]=React.useState([])
  React.useEffect(() => {
    fetch('http://localhost:3001/pastwork/pastworks/'+localStorage.getItem('userToken'))
    .then(res=>res.json())
    .then(data=>setExperiences(data))
  }, [])

  return (
    <VerticalBlock style={{...body,...props.style}}>
    <h2 style={{paddingLeft:"2.5%"}}>Activities & Experience</h2>
    <br/>
    {
      experiences.map(experience=>(
        <Experiences key={experience.id} experience={experience}/>
      ))

    }
    <br/>
    {props.body}
    
</VerticalBlock>
  )
}

export default PastExperience

const body={
    width:"60vw",
    border:"1px solid"+PrimaryTemplate.yellow,
    fontFamily: "'Inder', sans-serif",
    marginLeft:"2.3%",
    overflowY:"scroll"
}