import React from "react";
import {MdOutlineGroupAdd} from 'react-icons/md';
import { IoIosAddCircle } from "react-icons/io";
import PrimaryTemplate from "../../../Components/ColorTemplates/PrimaryTemplate";

const AddPeople= () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="addPeopleButton">
      <button onClick={handleOpen} style={addButton}> 
        <IoIosAddCircle/>
        <label className='dropTitle'>Add to group</label>
       
        </button>
      {open ? (
        <div style={addmenu} >
          <div style={addmenuItem}>
            <button style={addmenuButton}>Group 1</button>
          </div>
          <div style={addmenuItem}>
            <button style={addmenuButton}>Group 2</button>
          </div>
          <div style={addmenuItem}>
            <button style={addmenuButton}>Group 3</button>
          </div> 
          <div style={addmenuItem}>
            <button style={addmenuButton} ><MdOutlineGroupAdd fontSize="1.5em" className='dropdownIcon'/>Create Group</button>
          </div> 
        </div>
       
      ) : null}
      
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
