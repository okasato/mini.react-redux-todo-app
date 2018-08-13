const defaultState = {
  todos: [],
  item: '',
  // currentItem: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHECK_TODO': {
      const newState = Object.assign({}, state);
      const position = newState.todos.map(todo => todo.id).indexOf(action.todo.id);  
      newState.todos[position].isDone = !newState.todos[position].isDone;
      return newState;
    }

    case 'DELETE_TODO': {
      if (!confirm('are you sure?')) {
        return;
      }
      const newState = Object.assign({}, state);
      const position = newState.todos.indexOf(action.todo);  
      newState.todos.splice(position, 1);
      return newState;
    }

    case 'UPDATE_ITEM': {
      const newState = Object.assign({}, state);
      newState.item = action.event.target.value;
      return newState;
    }

    case 'ADD_TODO': {
      const newState = Object.assign({}, state);
      if (newState.item.trim() === '') {
        return;
      }

      const item = {
        id: new Date().getTime().toString(36) + '-' + Math.random().toString(36),
        title: newState.item,
        isDone: false,
        isEdit: false
      };

      newState.todos.push(item);
      newState.item = '';
      
      return newState;
    }

    case 'EDIT_TODO': {
      const newState = Object.assign({}, state);
      const position = newState.todos.indexOf(action.todo);
      newState.todos[position].isEdit = !newState.todos[position].isEdit;
      return newState;
    }
    
    case 'EDIT_DONE': {
      const newState = Object.assign({}, state);
      const position = newState.todos.indexOf(action.todo);
      newState.todos[position].title = action.item;
      newState.todos[position].isEdit = !todos[position].isEdit;

    return newState;
    }

    // case 'EDIT_ITEM': {
    //   const newState = Object.assign({}, state);
    //   newState.currentItem = action.event.target.value;
    //   return newState;
    // }

    case 'PERGE': {
      const newState = Object.assign({}, state);
      if (!confirm('are you sure?')) {
        return;
      }

      const todos = newState.todos.filter(todo => {
        return !todo.isDone;
      });

      newState.todos = todos;
      return newState;
    }

    default:
      return state;
  }
}