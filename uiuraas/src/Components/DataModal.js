import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import PrimaryTemplate from './ColorTemplates/PrimaryTemplate';

function DataModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button style={appCardBody} onClick={handleShow}>
        {props.name}
      </button>

      <Modal show={show} style={modalStyle} onHide={handleClose} size="lg"aria-labelledby="contained-modal-title-vcenter"centered>
        <Modal.Header closeButton>
        <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.data}</Modal.Body>
      </Modal>
    </>
  );
}

export default DataModal

const appCardBody={
  display: "flex",
  border: "1px solid"+PrimaryTemplate.yellow,
  margin: "2.5%",
  position: 'relative',
  height:"auto",
  alignItems:'center',
  justifyContent:'center',
  textAlign:'center',
  justifyContent:"space-between",
  width:"95%",
  background: 'none',
    
}

const modalStyle={
  border: "1px solid"+PrimaryTemplate.yellow,
}