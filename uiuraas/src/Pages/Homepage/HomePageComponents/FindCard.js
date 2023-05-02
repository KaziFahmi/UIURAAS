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

  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;

          if (windowWidth < 563) {
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
    <VerticalBlock style={body}>  
      <RowBlock style={{padding:"1%",display: "grid", gridTemplateColumns: `repeat(${numColumns}, 1fr)`}}>
           <h2 style={{paddingLeft:"1%"}}>Professors</h2>
          <Searchbar onChange={(e)=>setSearch(e.target.value)} addStyles={{marginLeft:"10%"}}/>
        </RowBlock>
      <VerticalBlock style={professorHolder}>
      
          <RowBlock style={{display: "grid", gridTemplateColumns: `repeat(${numColumns}, 1fr)`}}>
            {filteredProfessors.map(professor=>(
              <ProfessorsCards id={professor.id} key={professor.id} name={professor.name} keywords={professor.keywords}/>
            ))}
              {filteredProfessors.map(professor=>(
              <ProfessorsCards id={professor.id} key={professor.id} name={professor.name} keywords={professor.keywords}/>
            ))}
            
          </RowBlock>
        </VerticalBlock>
    </VerticalBlock>
  )
}

export default FindCard

const body={
border: "1px solid"+PrimaryTemplate.borders,
margin: "2.5%",
position: 'relative',
height:"600px",
width:"50vw",
alignItems:'left',
textAlign:'left',
justifyContent:"space-between",
marginTop:".5%",
backgroundColor:PrimaryTemplate.white
}

const professorHolder={
  overflow:"auto",
  height:"600px",
}