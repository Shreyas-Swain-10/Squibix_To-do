import React, { useState, useContext } from 'react';
import { TodoContext } from '../state/todoContext';
import { FaEdit, FaTrash, FaArrowsAlt } from 'react-icons/fa';
import { Checkbox, Box } from '@chakra-ui/react';
import TodoModal from './todo-modal';

function TodoItem({ todo }) {
  const { deleteTodo, toggleComplete, updateTodo } = useContext(TodoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (updatedTodo) => {
    updateTodo(updatedTodo);
    setIsModalOpen(false);
  };

  return (
    <Box className="flex items-center justify-between p-4 mb-2 bg-white rounded shadow-md">
      <div className="flex items-center">
        <Checkbox
          isChecked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="mr-4"
        />
        <div>
          <div className="flex justify-between w-96">
            <span className="font-bold">{todo.name}</span>
            <span className="text-gray-500">{todo.type}</span>
          </div>
          <div className="flex justify-between w-96 text-gray-500">
            <span>{todo.createdAt}</span>
            <div className="flex space-x-2">
              <FaEdit className="cursor-pointer" onClick={() => setIsModalOpen(true)} />
              <FaTrash className="cursor-pointer" onClick={() => deleteTodo(todo.id)} />
            </div>
          </div>
        </div>
      </div>
      <TodoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        todo={todo}
        onSave={handleEdit}
      />
    </Box>
  );
}

export default TodoItem;
