import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function index({show, handleClose, modalData}) {
    // console.log("data", modalData)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData?.s_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalData?.b_desc}</Modal.Body>
      </Modal>
    </>
  );
}

export default index;