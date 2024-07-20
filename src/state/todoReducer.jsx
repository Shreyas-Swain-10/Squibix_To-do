export const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.payload];
      case 'UPDATE_TODO':
        return state.map(todo => (todo.id === action.payload.id ? action.payload : todo));
      case 'DELETE_TODO':
        return state.filter(todo => todo.id !== action.payload);
      case 'TOGGLE_COMPLETE':
        return state.map(todo => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));
      case 'SET_TODOS':
        return action.payload;
      default:
        return state;
    }
  };
  