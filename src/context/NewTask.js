import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [formErrors, setFormErrors] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'taskName') {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!taskName.trim()) {
      errors.taskName = 'Task Name is required';
    }

    if (!description.trim()) {
      errors.description = 'Description is required';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (validateForm()) {
      let taskObj = {};
      taskObj['Name'] = taskName;
      taskObj['Description'] = description;

      // Add createdAt timestamp
      taskObj['createdAt'] = new Date().toISOString();

      save(taskObj);

      // Clear the input fields and form errors after saving
      setTaskName('');
      setDescription('');
      setFormErrors({});
      toggle(); 
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Task Name</label>
          <input type="text" className={`form-control ${formErrors.taskName ? 'is-invalid' : ''}`} value={taskName} onChange={handleChange} name="taskName" />
          {formErrors.taskName && <div className="invalid-feedback">{formErrors.taskName}</div>}
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea rows="5" className={`form-control ${formErrors.description ? 'is-invalid' : ''}`} value={description} onChange={handleChange} name="description"></textarea>
          {formErrors.description && <div className="invalid-feedback">{formErrors.description}</div>}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
