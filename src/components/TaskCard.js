import React from "react";

const TaskCard = ({ task }) => {
  return <li>
        <form className="bg-slate-700 p-4 rounded-lg flex items-center gap-2 text-white">
          <input type="checkbox" className="form-checkbox rounded-full h-6 w-6 text-indigo-600" checked={task.checked} onChange={() => console.log('change status.')} />
          <p className={task.checked ? "line-through" : null}>{task.content}</p>
        </form>
      </li>;
}

export default TaskCard;
