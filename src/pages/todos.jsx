import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TodoContext } from '../state/todoContext';
import AddTodo from '../components/todo-add';
import TodoList from '../components/todo-list';
import TodoFilter from '../components/todo-filter';
import TodoSearch from '../components/todo-search';

const Todos = () => {
  const { userId } = useParams();
  const { todos } = useContext(TodoContext);

  const userTodos = todos.filter(todo => todo.userId === userId);

  return (
    <div className="container mx-auto p-4">
      <AddTodo userId={userId} />
      <Box className="flex-grow overflow-auto p-6">
        <TodoSearch />
        <TodoFilter />
      </Box>
      <TodoSearch />
      <TodoFilter />
      <TodoList todos={userTodos} />
    </div>
  );
};

export default Todos;
