import React, { useState,useEffect, useRef } from 'react'
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
import RemoveButton from './ApplicationReadComponents/RemoveButton';
import PrimaryTemplate from '../../Components/ColorTemplates/PrimaryTemplate';
import { useSelector } from 'react-redux';
//Page that holds all components of this section

const ApplicationRead = () => {

  const [toggle, setToggle] = useState(false)
  const [applicationFormData, setApplicationData] = useState({});
  const [applications,setApplications]=useState([])
  const [filtedApplications,setFilteredApplications]=useState([])
  const {userInfo} = useSelector((state) => state.auth)
  const [search,setSearch]=useState("")
  const [selected,setSelected]=useState([])


  useEffect(()=>{
    fetch("http://localhost:3001/application/getApplications",
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({id:userInfo.id})
    })
    .then((response) => response.json())
    .then((data) => {
      setApplications(data);
    });
  },[])
  useEffect(()=>{
    setFilteredApplications(applications.filter((application)=>{
      return application.topic.toLowerCase().includes(search.toLowerCase()) || application.from.toLowerCase().includes(search.toLowerCase())
    }))
  },[search,applications])
  useEffect(()=>{
    console.log(selected)
  },[selected])
  const onClickRemove=()=>{
    console.log("herehere")
    console.log(selected)
      fetch('http://localhost:3001/application/deleteApplications', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ids:selected})
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          window.alert("Application Deleted");
          window.location.reload();
        });
  }
  // An attempt at sending application data to necessary components
  const handleApplicationData = (data) => {
    setApplicationData(data);
  };

  const [count,setCount] = useState(0)
  useEffect(()=>{
    if(count==0)
    {
      setToggle(false)
    }
    else
    {
      setToggle(true)
    }
  },[count])

  return (
   <ColumnBlock style={body}>
    <div ><h2>Application</h2></div>
    <div  style={dropdownSet}><ApplicationTypeDropdown/>&nbsp;<FieldType/></div>
    <br/>
    <RowBlock  style={applicationData} >

      <VerticalBlock style={applicationContainer}>
        <RowBlock style={appliContainerItems}>
          {/* Button to toggle certain options */}
          <button  style={selectAllToggle} onClick={() => setToggle(!toggle)} ><VscChecklist fontSize="2em" color='#FC9E04' /></button>
          <Searchbar onChange={setSearch} />
        </RowBlock>

        {/* To toggle the listed options */}
        {toggle && (
          <HorizontalBlock style={SelectAllToggleOptions} >
            <AddPeople />
            <RemoveButton body={<IoTrashSharp/>} text="Remove" onClick={onClickRemove} type={2} />
          </HorizontalBlock>
        )}


        <VerticalBlock>
          {/* ------application Card------ */}
          {filtedApplications.map((application)=>{
            return <ApplicationCard key={application.formId} formId={application.formId} application={application} handleApplicationData={handleApplicationData} setCount={setCount} count={count} selected={selected} setSelected={setSelected}/>
          })}
        </VerticalBlock>
      </VerticalBlock>

      <div  style={applicationForm}>
        {/* ------application Form------ */}
        {
          applicationFormData && <ApplicationReadForm applicationFormData={applicationFormData} setCount={setCount} count={count}/>
        }
      </div>

    </RowBlock>
   </ColumnBlock>
  )
}

export default ApplicationRead
const body={
  justifyContent:"left",
  alignItems:"left",
  width:"83vw"
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
  border: "1px solid"+PrimaryTemplate.yellow,
  width:" 30%",
  height: "700px",
  overflowY: "scroll"
}
const selectAllToggle={
  backgroundColor:PrimaryTemplate.white,
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


