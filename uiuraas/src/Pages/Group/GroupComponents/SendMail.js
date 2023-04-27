import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'

//a button to generate all group member emails. Requires function to make it possible
function SendMail(props) { 
  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <button onClick={handleShow} style={{...SendMailButton, backgroundColor: isHovered ?PrimaryTemplate.lightBlue : SendMailButton.backgroundColor} } onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          Send Mail
      </button>

    <Modal show={show} onHide={handleClose} size="lg"aria-labelledby="contained-modal-title-vcenter"centered>
    <Modal.Header closeButton>
    <Modal.Title>Emails</Modal.Title>
    </Modal.Header>
    <Modal.Body>{props.groupId}</Modal.Body>
    </Modal>
  </>
  )
}

export default SendMail

const SendMailButton={
    width:"120px",
    height:"50px",
    padding:"15px",
    marginLeft:"2.5%",
    backgroundColor:  PrimaryTemplate.blue ,
    color: "white",
    border: "1px solid"+PrimaryTemplate.blue,
    borderRadius:"12px",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"2%"

  }