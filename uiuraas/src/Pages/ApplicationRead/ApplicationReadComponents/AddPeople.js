import React,{useEffect, useState} from "react";
import {MdOutlineGroupAdd} from 'react-icons/md';
import { IoIosAddCircle } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import PrimaryTemplate from "../../../Components/ColorTemplates/PrimaryTemplate";
// import { get } from "http";
//To add people or teams to a group
const AddPeople= (props) => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [groups,setGroups] = useState([]);
  const [groupId, setGroupId] = useState(null);
  const [members,setMembers] = useState([]);
  const [groupName, setGroupName] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    
    setMembers(props.selected);
    // console.log(props.selected,members);
  },[props.selected])
  const onCreateGroup = () => {
    fetch("http://localhost:3001/groups/create",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: groupName,
        members: members
      })
    }).then(data=>data.json()).then(data=>{
      console.log(data);
      window.location.reload();
    })
  }
  const onSelect = (id) =>{
    if(id!=null){
    fetch("http://localhost:3001/groups/add",{
      method: "POST",
      headers:
      {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        groupId: id,
        members: members
      })
    }).then(data => data.json()).then(data=>{
      console.log(data)
    })
  }
  }
  const getGroups = () =>{
    fetch("http://localhost:3001/groups/all").then(data=>data.json()).then(
      data=>{setGroups(data);
        console.log(data)
    });
  }
  useEffect(()=>{
    getGroups();
  },[props.selected]);

  const handleOpen = () => {
    setOpen(!open);
  };
  const individualGroup = (group)=>{
    console.log(group.name);
    return <div style={addmenuItem}>
    <button style={addmenuButton} onClick={()=>{
      // setgroupId(group.id);
      onSelect(group.id);

    }}>{group.name}</button>
  </div>
  }

  return (
    <div className="addPeopleButton">
      <button onClick={handleOpen} style={addButton}> 
        <IoIosAddCircle/>
        <label className='dropTitle'>Add to group</label>
       
        </button>
        {/* Dummy group data */}
      {open ? (
        <div style={addmenu} >
          {groups.map(group=>{
            return individualGroup(group);
          })}
          <div style={addmenuItem}>
            {/* Button to create groups */}
            <button onClick={handleShow} style={addmenuButton} ><MdOutlineGroupAdd fontSize="1.5em" className='dropdownIcon'/>Create Group</button>
          </div> 
        </div>
       
      ) : null}
      {/* Modal where group creation takes place */}
      <Modal show={show} onHide={handleClose} size="lg"aria-labelledby="contained-modal-title-vcenter"centered>
        <Modal.Header closeButton>
        <Modal.Title>Create Groups</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
           <input type="text" name="uname" placeholder='Enter Group Name'  style={inputField} required  onChange={(e)=> setGroupName(e.target.value)}/>
           <button type="submit" style={saveButton} onClick={onCreateGroup}>Create</button>
        </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddPeople;


 const addButton={
    color: PrimaryTemplate.blue,
    border:"none",
    backgroundColor:PrimaryTemplate.white
};

const addmenu={
    border:"1px solid" + PrimaryTemplate.blue,
    width: "150px",
    height:"auto",
    position: "absolute",
    backgroundColor:PrimaryTemplate.white,
    zIndex:"100",
}

const addmenuItem={
    alignItems: "center",
}
const addmenuButton={  
    border: "none",
    borderBottom:"1px solid" + PrimaryTemplate.blue,
    width: "100%",
    height:"25px",
    color: PrimaryTemplate.blue,
    backgroundColor: PrimaryTemplate.white,
    textAlign: "start",
}

const inputField={
  width: "75%",
  padding: "15px",
  border: "2px solid "+PrimaryTemplate.gray58,
  marginTop: "10px",
  marginBottom: "15px",
  color: "#000000c2",
  fontSize: "18px",
}
  const saveButton={
    width:"120px",
    height:"50px",
    padding:"15px",
    marginLeft:"2.5%",
    marginBottom:"5px",
    backgroundColor:  PrimaryTemplate.blue ,
    color: "white",
    border: "1px solid"+PrimaryTemplate.blue,
    borderRadius:"12px",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
  }