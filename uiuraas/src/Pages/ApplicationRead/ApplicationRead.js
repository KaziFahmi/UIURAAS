import React, { useState } from 'react'
import ApplicationTypeDropdown from './ApplicationReadComponents/ApplicationTypeDropdown';
import FieldType from './ApplicationReadComponents/FieldType';
import { VscChecklist } from "react-icons/vsc";
import {IoTrashSharp} from "react-icons/io5";
import Searchbar from './ApplicationReadComponents/Searchbar';
import ApplicationCard from './ApplicationReadComponents/ApplicationCard';
import ApplicationReadForm from './ApplicationReadComponents/ApplicationReadForm/ApplicationReadForm';
import AddPeople from './ApplicationReadComponents/AddPeople';
import ColumnBlock from '../../Components/BasicBlocks/ColumnBlock';
import RowBlock from '../../Components/BasicBlocks/RowBlock';
import VerticalBlock from '../../Components/BasicBlocks/VerticalBlock';
import HorizontalBlock from '../../Components/BasicBlocks/HorizontalBlock';
import RemoveButton from './RemoveButton';



const ApplicationRead = () => {

  const [toggle, setToggle] = useState(false)


  return (
   <ColumnBlock style={body}>
    <div ><h2>Application</h2></div>
    <div  style={dropdownSet}><ApplicationTypeDropdown/><FieldType/></div>
    <br/>
    <RowBlock  style={applicationData} >

      <VerticalBlock style={applicationContainer}>
        <RowBlock style={appliContainerItems}>
          <button  style={selectAllToggle} onClick={() => setToggle(!toggle)} ><VscChecklist fontSize="2em" color='#FC9E04' /></button>
          <Searchbar/>
        </RowBlock>

        {toggle && (
          <HorizontalBlock style={SelectAllToggleOptions} >
            <AddPeople/>
            <RemoveButton body={<IoTrashSharp/>} text="Remove"/>
          </HorizontalBlock>
        )}

        <VerticalBlock>
          {/* ------application Card------ */}
          <ApplicationCard/>
        </VerticalBlock>
      </VerticalBlock>

      <div  style={applicationForm}>
        {/* ------application Form------ */}
        <div><ApplicationReadForm/></div>
      </div>

    </RowBlock>
   </ColumnBlock>
  )
}

export default ApplicationRead

const body={
  justifyContent:"left",
  alignItems:"left"
}

const dropdownSet={
  display: "flex",
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
const selectAllToggle={
  backgroundColor: "white",
  border: "none"
}

const SelectAllToggleOptions={
  display:"flex",
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


