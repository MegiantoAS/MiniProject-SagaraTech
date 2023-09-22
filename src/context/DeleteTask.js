import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const DeleteTaskModal = ({ isOpen, toggle, confirmDelete }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Confirm Deletion</ModalHeader>
      <ModalBody>
        Are you sure you want to delete this task?
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={confirmDelete}>
          Yes
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteTaskModal;
