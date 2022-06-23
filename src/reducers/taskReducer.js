/* eslint-disable eqeqeq */

const taskReducer = (
  taskCollection = [],
  action
) => {
  if (action.type == "ADD_TASK") {
    return [...taskCollection, action.payload];
  }
  if (action.type == "DELETE_TASK") {
    const taskId = action.payload.taskId;
    const newCollection = [...taskCollection].filter(
      (task) => task.taskId !== taskId
    );

    return newCollection;
  }
  if (action.type == "EDIT_TASK") {
    const newItem = action.payload;
    const newCollection = [...taskCollection];
    const itemIndex = newCollection.findIndex((item) => {
      return item.taskCreatedAt === newItem.taskCreatedAt;
    });

    newCollection[itemIndex] = newItem;

    return newCollection;
  }
  if (action.type == "SORT_TASK") {
    const { targetId, currentId } = action.payload;
    const newCollection = [...taskCollection];
    const firstItemRef = newCollection[currentId];
    newCollection[currentId] = newCollection[targetId];
    newCollection[targetId] = firstItemRef;

    return newCollection;
  }

  return taskCollection;
};

export default taskReducer;
