import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import useTodoValue from "../hooks/useTodoValue";

const TaskCard = ({ task }) => {
  const [todoCheck, handleInputChange] = useTodoValue(task.checked);

  return (
    <li>
      <form className="p-4 flex items-center gap-2 text-white">
        <input
          type="checkbox"
          className="form-checkbox rounded-full h-6 w-6 text-indigo-600"
          checked={todoCheck}
          onChange={handleInputChange}
        />
        <p className={task.checked ? "line-through" : null}>{task.content}</p>
        <button
          className="ml-auto"
          onChange={() => console.log("should clear task")}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </form>
    </li>
  );
};

export default TaskCard;
