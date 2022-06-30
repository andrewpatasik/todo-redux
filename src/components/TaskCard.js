import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import useTodoValue from "../hooks/useTodoValue";
import { connect } from "react-redux";
import { sortTask, deleteTask, editTask } from "../actions";
import {
  handleDragStart,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
} from "../helper";

const TaskCard = ({
  todoIndex,
  task,
  currentIndex,
  setCurrentIndex,
  sortTask,
  deleteTask,
  editTask,
}) => {
  const [todoCheck, handleInputChange] = useTodoValue(task.checked);
  const checkBoxRef = useRef(todoCheck);

  return (
    <li data-index={todoIndex}>
      <div
        className="todo-item hover:cursor-grab active:cursor-grabbing"
        draggable="true"
        onDragStart={(e) => handleDragStart(setCurrentIndex, e)}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleDrop(sortTask, currentIndex, e)}
      >
        <form className="p-4 flex items-center gap-2 text-white">
          <input
            ref={checkBoxRef}
            draggable="true"
            onDragOver={(e) => {
              e.stopPropagation();
            }}
            onDragStart={(e) => e.preventDefault()}
            type="checkbox"
            className="form-checkbox rounded-full h-6 w-6 text-indigo-600 cursor-pointer"
            checked={task.checked}
            onChange={(e) => {
              handleInputChange(e);
              const taskPayload = { ...task, checked: checkBoxRef.current.checked };
              editTask(taskPayload);
            }}
          />
          <p
            draggable="true"
            onDragOver={(e) => {
              e.stopPropagation();
            }}
            onDragStart={(e) => e.preventDefault()}
            className={task.checked ? "line-through text-slate-500" : "text-gray-300"}
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
            onDragStart={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </form>
      </div>
    </li>
  );
};

export default connect(null, { sortTask, deleteTask, editTask })(TaskCard);
