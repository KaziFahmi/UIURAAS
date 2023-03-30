import React, { useState } from 'react'
import ApplicationTypeDropdown from '../../Components/Application_Read/ApplicationTypeDropdown'
import FieldType from '../../Components/Application_Read/FieldType'
import { VscChecklist } from "react-icons/vsc";
import {IoTrashSharp} from "react-icons/io5";
import '../../Styles/application_read.css';
import Searchbar from '../../Components/Application_Read/Searchbar';
import ApplicationCard from '../../Components/Application_Read/ApplicationCard';
import ApplicationReadForm from '../../Components/Application_Read/ApplicationReadForm/ApplicationReadForm';
import AddPeople from '../../Components/Application_Read/AddPeople';


const ApplicationRead = () => {

  const [toggle, setToggle] = useState(false)


  return (
   <div className='body'>
    <div ><h2>Application</h2></div>
    <div className='dropdownSet'><ApplicationTypeDropdown/><label className='gap'>he</label><FieldType/></div>
    <br/>
    <div className='applicationData' >

      <div className='applicationContainer'>
        <div className='appliContainerItems'>
          <button className='selectAll'  onClick={() => setToggle(!toggle)} ><VscChecklist fontSize="2em" color='#FC9E04' /></button>
          <Searchbar/>
        </div>

        {toggle && (
          <div className='toggleOptions' >
            <AddPeople/>
            <button className='removeButton'><IoTrashSharp/>Remove</button>
          </div>
        )}

        <div className='applicationCard'>
          <ApplicationCard/>
          
        </div>
      </div>

      <div  className='applicationForm'>
        <div><ApplicationReadForm/></div>
      </div>
    </div>
   </div>
  )
}

export default ApplicationRead