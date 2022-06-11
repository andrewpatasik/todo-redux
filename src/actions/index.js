export const allTask = () => {
  return {
    type: "ALL_TASKS"
  }
}

export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: task
  }
}