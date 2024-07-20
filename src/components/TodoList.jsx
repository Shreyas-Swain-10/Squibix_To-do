import React, { useContext } from 'react';
import { TodoContext } from '../state/TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
