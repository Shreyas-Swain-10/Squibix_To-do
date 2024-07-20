import React from 'react';
import { ChakraProvider, Box, Heading, Container } from '@chakra-ui/react';
import AddTodo from './components/Addtodo';
import TodoList from './components/TodoList';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.md" py={6}>
        <Box textAlign="center" mb={6}>
          <Heading as="h1" size="xl">Todo Application</Heading>
        </Box>
        <Search />
        <Filter />
        <AddTodo />
        <TodoList />
      </Container>
    </ChakraProvider>
  );
}

export default App;
