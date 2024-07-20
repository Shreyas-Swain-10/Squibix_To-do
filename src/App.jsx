import React from 'react';
import { ChakraProvider, Box, Heading, Container } from '@chakra-ui/react';
import AddTodo from './components/todo-add';
import TodoList from './components/todo-list';
import Search from './components/todo-search';
import TodoFilter from './components/todo-filter';
import './App.css'

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.md" py={6} className="flex flex-col h-screen">
        <Box textAlign="center" mb={6}>
          <Heading as="h1" size="xl">Todo Application</Heading>
        </Box>
        <AddTodo />
        <Box className="flex-grow overflow-auto p-6">
          <Search />
          <TodoFilter />
          <TodoList />
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
