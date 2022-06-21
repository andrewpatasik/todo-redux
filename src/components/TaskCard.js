import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import useTodoValue from "../hooks/useTodoValue";
import { connect } from "react-redux";
import { sortTask, deleteTask } from "../actions";

const TaskCard = ({
  todoIndex,
  task,
  taskCollection,
  currentIndex,
  setCurrentIndex,
  sortTask,
  deleteTask,
}) => {
  const [todoCheck, handleInputChange] = useTodoValue(task.checked);

  const handleDragStart = (e) => {
    const item = e.target;
    const itemIndex = item.parentNode.dataset.index;

    setCurrentIndex(itemIndex);
  };

  const handleDragEnter = (e) => {
    const item = e.target;
    item.classList.add("bg-gray-600");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    const item = e.target;
    item.classList.remove("bg-gray-600");
  };

  const handleDrop = (e) => {
    const item = e.target;
    const targetIndex = item.parentNode.parentNode.dataset.index;
    item.classList.remove("bg-gray-600");

    const collection = [...taskCollection];
    const copyOfFirstItem = collection[currentIndex];
    collection[currentIndex] = collection[targetIndex];
    collection[targetIndex] = copyOfFirstItem;

    sortTask(collection);
  };

  return (
    <li data-index={todoIndex}>
      <div
        className="todo-item hover:cursor-grab active:cursor-grabbing"
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <form className="p-4 flex items-center gap-2 text-white">
          <input
            draggable="true"
            onDragOver={e => {
              e.stopPropagation();
            }}
            type="checkbox"
            className="form-checkbox rounded-full h-6 w-6 text-indigo-600"
            checked={todoCheck}
            onChange={handleInputChange}
          />
          <p
            draggable="true"
            onDragOver={(e) => {
              e.stopPropagation();
            }}
            className={task.checked ? "line-through" : null}
          >
            {task.content}
          </p>
          <button
            draggable="true"
            onDragOver={(e) => {
              e.stopPropagation();
            }}
            className="ml-auto"
            onClick={(e) => {
              e.preventDefault();
              deleteTask(task);
            }}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </form>
      </div>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    taskCollection: state.taskCollection,
  };
};

export default connect(mapStateToProps, { sortTask, deleteTask })(TaskCard);
