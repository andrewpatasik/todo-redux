import {v4 as uuidv4} from "uuid";

export const generateTaskId = (prefix) => {
  return prefix.concat("-", uuidv4())
}