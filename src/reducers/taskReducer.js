const taskReducer = (taskCollection = [{checked: true, content: 'Get things done.'}, {checked: false, content: 'Coding all night.'}], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...taskCollection, action.payload]
    default:
      return taskCollection;
  }
}

export default taskReducer;
