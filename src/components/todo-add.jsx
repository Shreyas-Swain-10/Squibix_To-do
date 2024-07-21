import React, { useState, useContext } from 'react';
import { TodoContext } from '../state/todoContext';

const AddTodo = ({ userId }) => {
  const { addTodo } = useContext(TodoContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: Date.now().toString(),
      name,
      description,
      type,
      deadline,
      completed: false,
      createdAt: new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' }),
      userId,
    });
    setName('');
    setDescription('');
    setType('');
    setDeadline('');
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg mb-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Name" 
            required 
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex mb-4">
          <div className="pr-2 w-1/2">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
            <select 
              id="type" 
              value={type} 
              onChange={(e) => setType(e.target.value)} 
              required 
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select type</option>
              <option value="Work">💼 Work</option>
              <option value="Personal">🏡 Personal</option>
              <option value="Shopping">🛒 Shopping</option>
              <option value="Errands">📋 Errands</option>
              <option value="Health">🏥 Health</option>
              <option value="Education">📚 Education</option>
              <option value="Finance">💰 Finance</option>
              <option value="Miscellaneous">🔖 Miscellaneous</option>
            </select>
          </div>
          <div className="pl-2 w-1/2">
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
            <input 
              type="date" 
              id="deadline" 
              value={deadline} 
              onChange={(e) => setDeadline(e.target.value)} 
              required 
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
