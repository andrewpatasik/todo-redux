export const sortTask = (collection) => {
  return {
    type: "SORT_TASK",
    payload: collection
  }
}

export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: task
  }
}

export const deleteTask = (task) => {
  return {
    type: "DELETE_TASK",
    payload: task
  }
}