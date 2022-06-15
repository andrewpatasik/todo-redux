/* eslint-disable eqeqeq */
import React from "react";
import { connect } from "react-redux";

import { addTask } from "../actions";
import useTodoValue from "../hooks/useTodoValue";

const AddTask = ({ addTask }) => {
  const [todoCheck, handleTodoCheck] = useTodoValue(false);
  const [todoTask, handleTodoTask] = useTodoValue("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const payload = {
      checked: todoCheck,
      content: todoTask,
    };

    addTask(payload);

    const inputField = document.getElementById('input-task');
    inputField.value = '';

  };

  return (
    <form
      id="todo-form"
      className="bg-slate-900 px-4 py-1 rounded-lg flex items-center gap-1 text-white"
      onSubmit={handleFormSubmit}
    >
      <input
        name="todo-check"
        type="checkbox"
        checked={todoCheck}
        className="form-checkbox rounded-full h-6 w-6 text-indigo-600"
        onChange={handleTodoCheck}
      />
      <input
        id="input-task"
        type="text"
        className="form-input w-full h-12 bg-slate-900 border-0 focus:ring-0"
        name="todo-task"
        value={todoTask}
        placeholder="Add new task..."
        onChange={handleTodoTask}
      />
    </form>
  );
};

export default connect(null, { addTask })(AddTask);
