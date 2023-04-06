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
    backgroundColor:" white"
};

const addmenu={
    border:"1px solid" + PrimaryTemplate.blue,
    width: "150px",
    height:"auto",
    position: "absolute",
}

const addmenuItem={
    alignItems: "center",
}
const addmenuButton={  
    border: "none",
    borderBottom:" 1px solid #14213D",
    width: "100%",
    height:"25px",
    color: "#14213D",
    backgroundColor: "white",
    textAlign: "start",
}
const createGroupButton={
    color:"#949494",
    border: "none",
    backgroundColor: "white",
    width: "100%",
    height:"25px",
    textAlign: "start"

}
