import React, { useState } from 'react';
import TodoModal from './TodoModal';
import '../styles/Todo.css';

function TodoItem({ todo }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="todo-item">
      <div onClick={toggleModal}>
        <h3>{todo.name}</h3>
        <p>{todo.description}</p>
        <p>{todo.type}</p>
        <p>{todo.deadline}</p>
        <p>{todo.completed ? 'Completed' : 'Pending'}</p>
      </div>
      {showModal && <TodoModal todo={todo} onClose={toggleModal} />}
    </div>
  );
}

export default TodoItem;
