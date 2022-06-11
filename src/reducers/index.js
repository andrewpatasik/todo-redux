import { combineReducers } from "redux";

import taskReducer from "./taskReducer";

// eslint-disable-next-line import/no-anonymous-default-export
export default combineReducers({
  taskCollection: taskReducer,
});
