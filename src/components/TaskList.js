import React, { useEffect, useState } from 'react';
import CreateTask from '../context/NewTask';
import Card from './TaskCard';

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  // Initialize checkbox states with values from local storage
  const [checkboxStates, setCheckboxStates] = useState(() => {
    const storedStates = localStorage.getItem('checkboxStates');
    return storedStates ? JSON.parse(storedStates) : [];
  });

  useEffect(() => {
    let arr = localStorage.getItem('taskList');

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  const toggleCheckbox = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
    localStorage.setItem('checkboxStates', JSON.stringify(newCheckboxStates));
  };

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Task</button>
      </div>
      <div className="task-container">
        {taskList && taskList.map((obj, index) => (
          <Card
            key={index}
            taskObj={obj}
            index={index}
            deleteTask={deleteTask}
            updateListArray={updateListArray}
            isChecked={checkboxStates[index]}
            toggleCheckbox={() => toggleCheckbox(index)}
          />
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
