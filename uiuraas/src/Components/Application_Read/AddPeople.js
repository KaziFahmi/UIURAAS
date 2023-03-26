import * as React from 'react';
import {MdOutlineGroupAdd} from 'react-icons/md';
import { IoIosAddCircle } from "react-icons/io";
import "../../Styles/adddropbutton.css"
const AddPeople= () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="addPeopleButton">
      <button onClick={handleOpen} className="addButton"> 
        <IoIosAddCircle/>
        <label className='dropTitle'>Add to group</label>
       
        </button>
      {open ? (
        <div className="addmenu" >
          <div className="addmenu-item">
            <button className='addmenuButton'>Group 1</button>
          </div>
          <div className="addmenu-item">
            <button className='addmenuButton'>Group 2</button>
          </div>
          <div className="addmenu-item">
            <button className='addmenuButton' >Group 3</button>
          </div> 
          <div className="addmenu-item">
            <button className='createGroupButton' ><MdOutlineGroupAdd fontSize="1.5em" className='dropdownIcon'/>Create Group</button>
          </div> 
        </div>
       
      ) : null}
      
    </div>
  );
};

export default AddPeople;