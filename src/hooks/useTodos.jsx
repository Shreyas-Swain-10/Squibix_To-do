import { useState, useEffect } from 'react';

function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now().toString() }]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const searchTodos = (term) => {
    const filteredTodos = todos.filter(todo =>
      todo.name.toLowerCase().includes(term.toLowerCase()) ||
      todo.description.toLowerCase().includes(term.toLowerCase())
    );
    setTodos(filteredTodos);
  };

  const filterTodos = (status) => {
    if (status === 'completed') {
      setTodos(todos.filter(todo => todo.completed));
    } else if (status === 'pending') {
      setTodos(todos.filter(todo => !todo.completed));
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  };

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete,
    searchTodos,
    filterTodos,
  };
}

export default useTodos;
