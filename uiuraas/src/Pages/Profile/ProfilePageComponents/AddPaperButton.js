import React, { useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import Modal from 'react-bootstrap/Modal';
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate';
//For adding research papers. Requires function
function AddPaperButton(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = (e) => {
    e.preventDefault();
    //Add paper function
    fetch('http://localhost:3001/paper/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, link,author:localStorage.getItem('userToken') }),
    })
      .then(res => res.json())  
      .then(data => {
        // console.log(data)
        if (data.success) {
          alert('Paper added successfully');
          window.location.reload();
        } else {
          alert(data.message);
        }
      })
      .catch(err => {
        console.log(err);
      }
      )

  }

  return (
    <>
    {/* The button that calls the modal to add paper */}
    <button onClick={handleShow} style={{...SendMailButton, backgroundColor: isHovered ?PrimaryTemplate.lightBlue : SendMailButton.backgroundColor} } onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <IoIosAddCircle/>
      </button>
{/* The modal where you perform the process of adding papers */}
    <Modal show={show} onHide={handleClose} size="lg"aria-labelledby="contained-modal-title-vcenter"centered>
    <Modal.Header closeButton>
    <Modal.Title>Add Paper</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <form onSubmit={onSubmit}>
        <input type="text" name="uname" placeholder='Enter Paper Title '  style={inputField} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="uname" placeholder='Enter Paper Link '  style={inputField} onChange={(e) => setLink(e.target.value)} />
        <br/>
        <button type="submit" style={{...SendMailButton, backgroundColor: isHovered2?PrimaryTemplate.lightBlue : SendMailButton.backgroundColor} } onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>Add</button>
    </form>
    </Modal.Body>
    </Modal>
  </>
  )
}

export default AddPaperButton

const SendMailButton={
    marginLeft:"2.5%",
    background: "none" ,
    color:PrimaryTemplate.blue ,
    border:"none",
    borderRadius:"12px",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    margin:"1%",
    marginLeft:"1.7%"
    

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
  