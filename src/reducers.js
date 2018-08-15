const defaultState = {
  todos: []
};

const getUniqueId = () => {
  return new Date().getTime().toString(36) + '-' + Math.random().toString(36);
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const item = {
        id: getUniqueId(),
        title: action.todo,
        isDone: false,
        isEdit: false
      };
      state.todos = state.todos.concat(item);
      return Object.assign({}, state);
    }

    case 'DELETE_TODO': {
      if (!confirm('are you sure?')) {
        return;
      }
      const position = state.todos.indexOf(action.todo);

      state.todos = state.todos.filter(((todo, id) => {
        if (position !== id) {
          return true;
        } else {
          return false;
        }
      }));

      return Object.assign({}, state);
    }

    case 'CHECK_TODO': {
      const position = state.todos.map(todo => todo.id).indexOf(action.todo.id);

      state.todos = state.todos.map((todo, id) => {
        if (id === position) {
          todo.isDone = !todo.isDone;
          return todo;
        } else {
          return todo;
        }
      });
      
      return Object.assign({}, state);
    }

    case 'EDIT_TODO': {
      const position = state.todos.indexOf(action.todo);

      state.todos = state.todos.map((todo, id) => {
        if (id === position) {
          todo.isEdit = !todo.isEdit;
          return todo;
        } else {
          return todo;
        }
      });

      return Object.assign({}, state);
    }
    
    case 'EDIT_DONE': {
      const position = state.todos.indexOf(action.todo);

      state.todos = state.todos.map((todo, id) => {
        if (id === position) {
          todo.title = action.input;
          todo.isEdit = !todo.isEdit;
          return todo;
        } else {
          return todo;
        }
      });

      return Object.assign({}, state);
    }

    case 'PERGE': {
      if (!confirm('are you sure?')) {
        return;
      }

      state.todos = state.todos.filter(todo => {
        return !todo.isDone;
      });

      return Object.assign({}, state);
    }

    default:
      return state;
  }
}