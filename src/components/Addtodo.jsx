import React, { useState, useContext } from 'react';
import { TodoContext } from '../state/TodoContext';
import { FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react';

function AddTodo() {
  const { addTodo } = useContext(TodoContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      name,
      description,
      type,
      deadline,
      completed: false,
      createdAt: new Date().toLocaleString(),
    });
    setName('');
    setDescription('');
    setType('');
    setDeadline('');
  };

  return (
    <Box mb={6} p={4} borderWidth={1} borderRadius="md">
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={3}>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        </FormControl>
        <FormControl id="description" mb={3}>
          <FormLabel>Description</FormLabel>
          <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
        </FormControl>
        <FormControl id="type" mb={3}>
          <FormLabel>Type</FormLabel>
          <Input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" required />
        </FormControl>
        <FormControl id="deadline" mb={3}>
          <FormLabel>Deadline</FormLabel>
          <Input type="datetime-local" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
        </FormControl>
        <Button colorScheme="blue" type="submit">Add Todo</Button>
      </form>
    </Box>
  );
}

export default AddTodo;
