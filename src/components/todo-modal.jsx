import React, { useState } from 'react';
import { Box, Select, FormControl, FormLabel, Input, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';

function TodoModal({ isOpen, onClose, todo, onSave }) {
  const [name, setName] = useState(todo.name);
  const [description, setDescription] = useState(todo.description);
  const [type, setType] = useState(todo.type);
  const [deadline, setDeadline] = useState(todo.deadline);

  const handleSave = () => {
    onSave({ ...todo, name, description, type, deadline });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="name" mb={3}>
            <FormLabel>Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          </FormControl>
          <FormControl id="type">
            <FormLabel>Type</FormLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Select type"
              required
            >
              <option value="Work">💼 Work</option>
              <option value="Personal">🏡 Personal</option>
              <option value="Shopping">🛒 Shopping</option>
              <option value="Errands">📋 Errands</option>
              <option value="Health">🏥 Health</option>
              <option value="Education">📚 Education</option>
              <option value="Finance">💰 Finance</option>
              <option value="Miscellaneous">🔖 Miscellaneous</option>
            </Select>
          </FormControl>
          <FormControl id="deadline" mb={3}>
            <FormLabel>Deadline</FormLabel>
            <Input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>Save</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default TodoModal;
