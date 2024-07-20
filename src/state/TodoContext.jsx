import React, { createContext, useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import useTodos from '../hooks/useTodos';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const { todos, addTodo, updateTodo, deleteTodo, toggleComplete, searchTodos, filterTodos } = useTodos();
  const [state, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    dispatch({ type: 'SET_TODOS', payload: todos });
  }, [todos]);

  const handleAddTodo = (todo) => {
    const todoWithId = { ...todo, id: Date.now() }; // Generate unique ID using timestamp
    dispatch({ type: 'ADD_TODO', payload: todoWithId });
    addTodo(todoWithId);
  };

  const handleUpdateTodo = (updatedTodo) => {
    dispatch({ type: 'UPDATE_TODO', payload: updatedTodo });
    updateTodo(updatedTodo);
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
    deleteTodo(id);
  };

  const handleToggleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
    toggleComplete(id);
  };

  const handleSearchTodos = (term) => {
    searchTodos(term);
  };

  const handleFilterTodos = (status) => {
    filterTodos(status);
  };

  return (
    <TodoContext.Provider value={{
      todos: state,
      addTodo: handleAddTodo,
      updateTodo: handleUpdateTodo,
      deleteTodo: handleDeleteTodo,
      toggleComplete: handleToggleComplete,
      searchTodos: handleSearchTodos,
      filterTodos: handleFilterTodos,
    }}>
      {children}
    </TodoContext.Provider>
  );
};
