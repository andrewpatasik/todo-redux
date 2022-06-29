export const sortTask = (targetId, currentId) => {
  return {
    type: "SORT_TASK",
    payload: { targetId, currentId },
  };
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

export const deleteCompletedTask = () => {
  return {
    type: "DELETE_COMPLETED"
  }
}

export const editTask = (task) => {
  return {
    type: "EDIT_TASK",
    payload: task
  }
}