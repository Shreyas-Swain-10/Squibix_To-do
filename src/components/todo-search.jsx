import React, { useContext, useState } from 'react';
import { TodoContext } from '../state/todoContext';
import { Input, Box } from '@chakra-ui/react';

function Search() {
  const { searchTodos } = useContext(TodoContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    searchTodos(e.target.value);
  };

  return (
    <Box mb={6}>
      <Input 
        value={searchTerm} 
        onChange={handleSearch} 
        placeholder="Search Todos" 
        size="lg" 
      />
    </Box>
  );
}

export default Search;
