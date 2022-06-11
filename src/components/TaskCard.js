import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


const TaskCard = ({ task }) => {
  return <li>
        <form className="bg-slate-700 p-4 rounded-lg flex items-center gap-2 text-white">
          <input type="checkbox" className="form-checkbox rounded-full h-6 w-6 text-indigo-600" checked={task.checked} onChange={() => console.log('change status.')} />
          <p className={task.checked ? "line-through" : null}>{task.content}</p>
          <button className="ml-auto" onChange={() => console.log('should clear task')}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </form>
      </li>;
}

export default TaskCard;
