import React, { useState } from 'react'
import ApplicationTypeDropdown from './ApplicationReadComponents/ApplicationTypeDropdown';
import FieldType from './ApplicationReadComponents/FieldType';
import { VscChecklist } from "react-icons/vsc";
import {IoTrashSharp} from "react-icons/io5";
import Searchbar from './ApplicationReadComponents/Searchbar';
import ApplicationCard from './ApplicationReadComponents/ApplicationCard';
import ApplicationReadForm from './ApplicationReadComponents/ApplicationReadForm/ApplicationReadForm';
import AddPeople from './ApplicationReadComponents/AddPeople';
import Common from '../../Layout/Common';


const ApplicationRead = () => {

  const [toggle, setToggle] = useState(false)


  return (
    <Common>
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
   </div></Common>
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


