export const checkTodo = todo => {
  return {
    type: 'CHECK_TODO',
    todo  
  }
}

export const deleteTodo = todo => {
  return {
    type: 'DELETE_TODO',
    todo  
  }
}

export const updateItem = event => {
  return {
    type: 'UPDATE_ITEM',
    event
  }
}

export const addTodo = event => {
  return {
    type: 'ADD_TODO',
    event  
  }
}

export const editTodo = todo => {
  return {
    type: 'EDIT_TODO',
    todo  
  }
}

export const editDone = (todo, item) => {
  return {
    type: 'EDIT_DONE',
    todo,
    item  
  }
}

// export const editItem = event => {
//   return {
//     type: 'EDIT_ITEM',
//     event  
//   }
// }

export const perge = () => {
  return {
    type: 'PERGE'  
  }
}