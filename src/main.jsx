import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import './index.css';
import App from './App';
import { TodoProvider } from './state/TodoContext';

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
