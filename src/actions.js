export const addTodo = todo => {
  return {
    type: 'ADD_TODO',
    todo  
  }
}

export const deleteTodo = todo => {
  return {
    type: 'DELETE_TODO',
    todo  
  }
}

export const checkTodo = todo => {
  return {
    type: 'CHECK_TODO',
    todo  
  }
}

export const editTodo = todo => {
  return {
    type: 'EDIT_TODO',
    todo  
  }
}

export const editDone = (todo, input) => {
  return {
    type: 'EDIT_DONE',
    todo,
    input  
  }
}

export const perge = () => {
  return {
    type: 'PERGE'  
  }
}