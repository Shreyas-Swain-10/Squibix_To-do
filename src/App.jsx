// import React from 'react';
// import { ChakraProvider, Box, Heading, Container } from '@chakra-ui/react';
// import AddTodo from './components/todo-add';
// import TodoList from './components/todo-list';
// import Search from './components/todo-search';
// import TodoFilter from './components/todo-filter';
// import './App.css'

// function App() {
//   return (
//     <ChakraProvider>
//       <Container maxW="container.md" py={6} className="flex flex-col h-screen">
//         <Box textAlign="center" mb={6}>
//           <Heading as="h1" size="xl">Todo Application</Heading>
//         </Box>
//         <AddTodo />
//         <Box className="flex-grow overflow-auto p-6">
//           <Search />
//           <TodoFilter />
//           <TodoList />
//         </Box>
//       </Container>
//     </ChakraProvider>
//   );
// }

// export default App;


import React from 'react';
import { ChakraProvider, Container, Box, Heading } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './state/authContext';
import Login from './pages/login';
import Logout from './pages/logout';
import Signup from './pages/signup';
import Todos from './pages/todos';
import PrivateRoute from './routes/privateRoute';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <Container maxW="container.md" py={6}>
            <Box textAlign="center" mb={6}>
              <Heading as="h1" size="xl">Todo Application</Heading>
            </Box>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/todos/:userId" element={<PrivateRoute element={<Todos />} />} />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </Container>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
