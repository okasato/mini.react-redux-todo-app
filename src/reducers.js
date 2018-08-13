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
      console.log('action.todo', action.todo);
      state.todos = state.todos.concat(action.todo);
      return Object.assign({}, state);
    }

    case 'DELETE_TODO': {
      if (!confirm('are you sure?')) {
        return;
      }

      state.todos = state.todos.filter(todo => {
        if (action.todo !== todo) {
          return true;
        } else {
          return false;
        }
      });

      return Object.assign({}, state);
    }

    // case 'CHECK_TODO': {
    //   const newState = Object.assign({}, state);
    //   const position = newState.todos.map(todo => todo.id).indexOf(action.todo.id);  
    //   newState.todos[position].isDone = !newState.todos[position].isDone;
    //   return newState;
    // }


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

    // case 'PERGE': {
    //   const newState = Object.assign({}, state);
    //   if (!confirm('are you sure?')) {
    //     return;
    //   }

    //   const todos = newState.todos.filter(todo => {
    //     return !todo.isDone;
    //   });

    //   newState.todos = todos;
    //   return newState;
    // }

    default:
      return state;
  }
}