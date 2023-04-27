import React, { useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import Modal from 'react-bootstrap/Modal';
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate';

function AddPastExperience(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button onClick={handleShow} style={{...SendMailButton, backgroundColor: isHovered ?PrimaryTemplate.lightBlue : SendMailButton.backgroundColor} } onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <IoIosAddCircle/>
      </button>

    <Modal show={show} onHide={handleClose} size="lg"aria-labelledby="contained-modal-title-vcenter"centered>
    <Modal.Header closeButton>
    <Modal.Title>Add Paper</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <form> 
        <input type="text" name="uname" placeholder='Enter Job Title '  style={inputField} />
        <input type="text" name="uname" placeholder='Enter Company Name'  style={inputField} />
        <input type="Date" name="uname" placeholder='Enter Start Date '  style={inputField} />
        <input type="Date" name="uname" placeholder='Enter End Date '  style={inputField} />
        <br/>
        <button type="submit" style={{...SendMailButton, backgroundColor: isHovered2?PrimaryTemplate.lightBlue : SendMailButton.backgroundColor} } onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>Add</button>
    </form>
    </Modal.Body>
    </Modal>
  </>
  )
}

export default AddPastExperience

const SendMailButton={
    marginLeft:"2.5%",
    background: "none" ,
    color:PrimaryTemplate.blue ,
    border:"none",
    borderRadius:"12px",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:"1%"

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
  