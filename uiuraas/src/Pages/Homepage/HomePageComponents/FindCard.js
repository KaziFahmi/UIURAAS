import React, { useEffect,useState }  from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import Searchbar  from './Searchbar'
import RowBlock from '../../../Components/BasicBlocks/RowBlock'
import ProfessorsCards from './ProfessorsCards'
// To locate cards for professors

function FindCard() {
  const [professors,setProfessors]=useState([])
  const [filteredProfessors,setFilteredProfessors]=useState([])
  const [search,setSearch]=useState('')
  useEffect(()=>{
    fetch('http://localhost:3001/user/professors')
    .then(res=>res.json())
    .then(data=>setProfessors(data))
  },[])
  useEffect(()=>{
    setFilteredProfessors(
      professors.filter(professor=>
        professor.name.toLowerCase().includes(search.toLowerCase())
        || professor.keywords.some(keyword=>keyword.toLowerCase().includes(search.toLowerCase()))
      )
    )
  },[search,professors])
  return (
    <VerticalBlock style={body}>
        <RowBlock style={{padding:"1%"}}>
          <h2 style={{paddingLeft:"1%"}}>Professors</h2>
          <Searchbar onChange={(e)=>setSearch(e.target.value)}/>
        </RowBlock>
        <RowBlock>
          {filteredProfessors.map(professor=>(
            <ProfessorsCards id={professor.id} key={professor.id} name={professor.name} keywords={professor.keywords}/>
          ))}
        </RowBlock>
        
    </VerticalBlock>
  )
}

export default FindCard

const body={
border: "1px solid"+PrimaryTemplate.yellow,
margin: "2.5%",
position: 'relative',
height:"550px",
width:"95%",
alignItems:'left',
textAlign:'left',
justifyContent:"space-between",
marginTop:".5%",
overflowY:"scroll"

}