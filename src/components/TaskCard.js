import React, { useState } from 'react';
import EditTaskModal from '../context/EditTask';
import colors from './TaskClors';
import DeleteTaskModal from '../context/DeleteTask';

const Card = ({ taskObj, index, deleteTask, updateListArray, isChecked, toggleCheckbox }) => {
  const [modal, setModal] = useState(false);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const toggleDeleteConfirmationModal = () => {
    setDeleteConfirmationModal(!deleteConfirmationModal);
  };

  const updateTask = (obj) => {
    // Add updatedAt timestamp
    obj.updatedAt = new Date().toISOString();
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    // Tampilkan modal konfirmasi
    toggleDeleteConfirmationModal();
  };

  const confirmDelete = () => {
    // Hapus tugas hanya jika pengguna mengonfirmasi
    deleteTask(index);
    // Tutup modal konfirmasi
    toggleDeleteConfirmationModal();
  };

  return (
    <div className="card-wrapper mr-5">
      <div className="card-top" style={{ "background-color": colors[index % 5].primaryColor }}>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="task-holder">
        <div style={{ "display": "flex", "alignItems": "center" }}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={toggleCheckbox}
          />
          <span className="card-header" style={{ "background-color": colors[index % 5].secondaryColor, "borderRadius": "10px" }}>
            {taskObj.Name}
          </span>
        </div>
        <p className="mt-3">{taskObj.Description}</p>
        <div>
          <p>Created At: {new Date(taskObj.createdAt).toLocaleString()}</p>
        </div>
        <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
          <i className="far fa-edit ml-3" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer", "marginRight": "10px" }} onClick={() => setModal(true)}></i>
          <i className="fas fa-trash-alt" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} onClick={handleDelete}></i>
        </div>
        {isChecked ? (
          <span className="text-success">Completed</span>
        ) : (
          <span className="text-danger">Not Completed</span>
        )}
      </div>
      <EditTaskModal modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
      <DeleteTaskModal isOpen={deleteConfirmationModal} toggle={toggleDeleteConfirmationModal} confirmDelete={confirmDelete} />
    </div>
  );
};

export default Card;
