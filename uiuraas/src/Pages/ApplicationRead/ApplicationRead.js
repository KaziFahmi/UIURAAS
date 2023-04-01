import React, { useState } from 'react'
import ApplicationTypeDropdown from '../../Components/Application_Read/ApplicationTypeDropdown'
import FieldType from '../../Components/Application_Read/FieldType'
import { VscChecklist } from "react-icons/vsc";
import {IoTrashSharp} from "react-icons/io5";
import Searchbar from '../../Components/Application_Read/Searchbar';
import ApplicationCard from '../../Components/Application_Read/ApplicationCard';
import ApplicationReadForm from '../../Components/Application_Read/ApplicationReadForm/ApplicationReadForm';
import AddPeople from '../../Components/Application_Read/AddPeople';


const ApplicationRead = () => {

  const [toggle, setToggle] = useState(false)


  return (
   <div className='body'>
    <div ><h2>Application</h2></div>
    <div className='dropdownSet' style={dropdownSet}><ApplicationTypeDropdown/><FieldType/></div>
    <br/>
    <div className='applicationData' style={applicationData} >

      <div className='applicationContainer' style={applicationContainer}>
        <div className='appliContainerItems' style={appliContainerItems}>
          <button className='selectAll' style={selectAll} onClick={() => setToggle(!toggle)} ><VscChecklist fontSize="2em" color='#FC9E04' /></button>
          <Searchbar/>
        </div>

        {toggle && (
          <div className='toggleOptions' style={toggleOptions} >
            <AddPeople/>
            <button className='removeButton' style={removeButton}><IoTrashSharp/>Remove</button>
          </div>
        )}

        <div className='applicationCard' >
          <ApplicationCard/>
          
        </div>
      </div>

      <div  className='applicationForm' style={applicationForm}>
        <div><ApplicationReadForm/></div>
      </div>
    </div>
   </div>
  )
}

export default ApplicationRead

const dropdownSet={
  display: "flex",
  paddingLeft:"0.5%"
}
// .gap{
//   color: white;
// }

const applicationData={
  display: "flex",
  justifyContent: "flex-start",
  width: "80vw"
}

const applicationContainer={
  border: "1px solid #FC9E04",
  width:" 30%",
  height: "700px",
  overflowY: "scroll"
}
const selectAll={
  backgroundColor: "white",
  border: "none"
}

const toggleOptions={
  display:"flex",
}

const removeButton={
  backgroundColor: "white",
  color: "#14213D",
  border: "none"
}

const applicationForm={
  border: "1px solid #FC9E04",
  width: "70%",
  height: "700px",
  overflowY: "scroll",
  fontFamily: "'Inder', sans-serif"
}

const appliContainerItems={
  padding:" 2.5%",
  display: "flex",
  justifyContent: "space-between"
}


