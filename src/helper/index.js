import { v4 as uuidv4 } from "uuid";

export const generateTaskId = (prefix) => {
  return prefix.concat("-", uuidv4());
};

export const handleDragStart = (setCurrentIndex, e) => {
  const item = e.target;
  const itemIndex = item.parentNode.dataset.index;

  setCurrentIndex(itemIndex);
};

export const handleDragEnter = (e) => {
  const item = e.target;
  item.classList.add("bg-gray-600");
};

export const handleDragOver = (e) => {
  e.preventDefault();
};

export const handleDragLeave = (e) => {
  const item = e.target;
  item.classList.remove("bg-gray-600");
};

export const handleDrop = (sortTask, currentIndex, e) => {
  const item = e.target;
  const targetIndex = item.parentNode.parentNode.dataset.index;
  item.classList.remove("bg-gray-600");

  sortTask(targetIndex, currentIndex);
};
