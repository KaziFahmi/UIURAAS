import * as React from 'react';
import "../../Styles/application_read.css";
import { IoIosArrowDown } from 'react-icons/io';

const FieldType= () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen} className="dropdownButton" style={dropdownButton}>
        <label className='dropTitle'>Field</label>
        <IoIosArrowDown fontSize="1.5em" className='dropdownIcon'/>
        </button>
      {open ? (
        <div className="menu" style={menu} >
          <div className="menu-item" style={menuItems}>
            <button className='menuButton' style={menuButton}>BioInformatics</button>
          </div>
          <div className="menu-item" style={menuItems}>
            <button className='menuButton' style={menuButton}>Database</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FieldType;

const dropdownButton={
  border: "1px solid #FC9E04",
  width: "100px",
  height:"25px",
  color: "#FC9E04",
  backgroundColor: "white",
  textAlign: "start", 
  display: "flex",
  justifyContent: "space-between"
}

const menu={
  border:"1px solid #FC9E04",
  width: "150px",
  height:"auto",
  position: "absolute",
}

const menuItems={
  alignItems: "center",
  backgroundColor: "white"
}

const menuButton={  
  border: "none",
  borderBottom: "1px solid #FC9E04",
  width: "100%",
  height:"25px",
  color: "#FC9E04",
  backgroundColor: "white",
  textAlign: "start"
}