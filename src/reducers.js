const defaultState = {
  todos: [],
  item: '',
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
      state.todos[position].isDone = !state.todos[position].isDone;
      console.log('todo.isDone', state.todos[position].isDone);
      return Object.assign({}, state);
    }


    // case 'GET_LIST': {
    //   const currentState = Object.assign({}, state);
    //   return currentState;
    // }

    // case 'UPDATE_ITEM': {
    //   const newState = Object.assign({}, state);
    //   newState.item = action.event.target.value;
    //   return newState;
    // }

    // case 'EDIT_TODO': {
    //   const newState = Object.assign({}, state);
    //   const position = newState.todos.indexOf(action.todo);
    //   newState.todos[position].isEdit = !newState.todos[position].isEdit;
    //   return newState;
    // }
    
    // case 'EDIT_DONE': {
    //   const newState = Object.assign({}, state);
    //   const position = newState.todos.indexOf(action.todo);
    //   newState.todos[position].title = action.item;
    //   newState.todos[position].isEdit = !todos[position].isEdit;
    //   return newState;
    // }

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