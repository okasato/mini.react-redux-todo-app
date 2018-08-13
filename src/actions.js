export const getList = () => {
  return {
    type: 'GET_LIST'
  }
}

export const checkTodo = todo => {
  return {
    type: 'CHECK_TODO',
    todo  
  }
}

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

export const updateItem = event => {
  return {
    type: 'UPDATE_ITEM',
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

export const perge = () => {
  return {
    type: 'PERGE'  
  }
}