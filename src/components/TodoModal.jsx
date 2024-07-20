import React, { useContext, useState } from 'react';
import { TodoContext } from '../state/TodoContext';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

function TodoModal({ todo, onClose }) {
  const { updateTodo, deleteTodo, toggleComplete } = useContext(TodoContext);
  const [name, setName] = useState(todo.name);
  const [description, setDescription] = useState(todo.description);
  const [type, setType] = useState(todo.type);
  const [deadline, setDeadline] = useState(todo.deadline);

  const handleUpdate = () => {
    updateTodo({ ...todo, name, description, type, deadline });
    onClose();
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
    onClose();
  };

  const handleToggleComplete = () => {
    toggleComplete(todo.id);
    onClose();
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="name" mb={3}>
            <FormLabel>Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="description" mb={3}>
            <FormLabel>Description</FormLabel>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormControl>
          <FormControl id="type" mb={3}>
            <FormLabel>Type</FormLabel>
            <Input value={type} onChange={(e) => setType(e.target.value)} />
          </FormControl>
          <FormControl id="deadline" mb={3}>
            <FormLabel>Deadline</FormLabel>
            <Input type="datetime-local" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
          </FormControl>
          <Text>Created At: {todo.createdAt}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleUpdate}>Update</Button>
          <Button colorScheme="red" mr={3} onClick={handleDelete}>Delete</Button>
          <Button onClick={handleToggleComplete}>
            {todo.completed ? 'Mark as Pending' : 'Mark as Completed'}
          </Button>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default TodoModal;
