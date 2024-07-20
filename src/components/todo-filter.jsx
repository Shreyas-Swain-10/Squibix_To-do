import React, { useContext, useState } from 'react';
import { TodoContext } from '../state/todoContext';
import { Select, Box, Stack } from '@chakra-ui/react';

function TodoFilter() {
  const { filterTodos } = useContext(TodoContext);
  const [status, setStatus] = useState('All');
  const [type, setType] = useState('All');

  const handleStatusFilter = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value, type);
  };

  const handleTypeFilter = (e) => {
    setType(e.target.value);
    filterTodos(status, e.target.value);
  };

  return (
    <Box mb={6}>
      <Stack spacing={4}>
        <Select value={status} onChange={handleStatusFilter} placeholder="Filter by Status" size="lg">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </Select>
        <Select value={type} onChange={handleTypeFilter} placeholder="Filter by Type" size="lg">
          <option value="All">All</option>
          <option value="Work">💼 Work</option>
          <option value="Personal">🏡 Personal</option>
          <option value="Shopping">🛒 Shopping</option>
          <option value="Errands">📋 Errands</option>
          <option value="Health">🏥 Health</option>
          <option value="Education">📚 Education</option>
          <option value="Household">🏠 Household</option>
          <option value="Finance">💰 Finance</option>
          <option value="Miscellaneous">🔖 Miscellaneous</option>
        </Select>
      </Stack>
    </Box>
  );
}

export default TodoFilter;
