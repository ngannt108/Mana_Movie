import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import './ModalBookingPopUp.css'

export default function ModalPopUp(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const navigateBooking = () =>{
    navigate("/Booking");
  }

  return (
    <>
      <Button className='time' onClick={handleShow}>
       {props.info[2]}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Sure you want to book {props.info[1]} at {props.info[2]} - {props.info[3]} at {props.info[0]} ?
        </Modal.Body>
        <Modal.Footer>
        <Button variant="warning" onClick={navigateBooking}>
            Yes, choose seat
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}