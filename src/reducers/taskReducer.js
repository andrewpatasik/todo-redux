const taskReducer = (
  taskCollection = [
    {
      taskId: "task-1bdfdfa6-1871-402c-8cff-8cbc510d488b",
      taskCreatedAt: "2022-06-21T05:41:21.230Z",
      checked: false,
      content: "start coding",
    },
    {
      taskId: "task-ccfd03aa-9b84-459a-b460-8f736116d67f",
      taskCreatedAt: "2022-06-21T05:41:25.928Z",
      checked: false,
      content: "feed my pet",
    },
    {
      taskId: "task-1f70f0cf-faa9-42d0-853b-0cf8659376bc",
      taskCreatedAt: "2022-06-21T05:41:34.048Z",
      checked: false,
      content: "buy groceries",
    },
  ],
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
    case "EDIT_TASK":
        // for checked change
    case "SORT_TASK":
      return action.payload
    default:
      return taskCollection;
  }
};

export default taskReducer;
