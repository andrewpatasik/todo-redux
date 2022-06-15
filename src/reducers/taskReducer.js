const taskReducer = (
  taskCollection = [],
  action
) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...taskCollection, action.payload];
    case "DELETE_TASK":
      const taskId = action.payload.taskId;
      const newCollection = [...taskCollection].filter(
        (task) => task.taskId !== taskId
      );

      return newCollection;
    default:
      return taskCollection;
  }
};

export default taskReducer;
