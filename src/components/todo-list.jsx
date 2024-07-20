import React, { useContext } from 'react';
import { TodoContext } from '../state/todoContext';
import TodoItem from './todo-item';

function TodoList() {
  const { todos } = useContext(TodoContext);
  const sortedTodos = [...todos].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="flex-grow overflow-auto p-6">
      {sortedTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
