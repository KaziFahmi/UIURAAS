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
      <button onClick={handleOpen} className="dropdownButton">
        <label className='dropTitle'>Field</label>
        <IoIosArrowDown fontSize="1.5em" className='dropdownIcon'/>
        </button>
      {open ? (
        <div className="menu" >
          <div className="menu-item">
            <button className='menuButton'>Student</button>
          </div>
          <div className="menu-item">
            <button className='menuButton'>RA</button>
          </div>
          <div className="menu-item">
            <button className='menuButton' >All</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FieldType;