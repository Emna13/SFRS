import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


const Cart = ({ show, handleClose }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Continuer mes achats
          </Button>
          <Button variant="primary" onClick={handleClose}>
            <Link to='/cart' style={{color:'white'}}>Commander</Link> 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
