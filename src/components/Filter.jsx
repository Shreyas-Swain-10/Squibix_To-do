import React, { useContext, useState } from 'react';
import { TodoContext } from '../state/TodoContext';
import { Select, Box } from '@chakra-ui/react';

function Filter() {
  const { filterTodos } = useContext(TodoContext);
  const [status, setStatus] = useState('All');

  const handleFilter = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };

  return (
    <Box mb={6}>
      <Select value={status} onChange={handleFilter} placeholder="Filter by Status" size="lg">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </Select>
    </Box>
  );
}

export default Filter;
