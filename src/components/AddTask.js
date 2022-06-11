import React from "react";

const AddTask = () => {
  return (
    <form className="bg-slate-900 px-4 py-1 rounded-lg flex items-center gap-1 text-white">
      <input
        type="checkbox"
        className="form-checkbox rounded-full h-6 w-6 text-indigo-600"
      />
      <input
        type="text"
        className="form-input w-full h-12 bg-slate-900 border-0 focus:ring-0"
        name="new-task"
        placeholder="Add new task..."
      />
    </form>
  );
};

export default AddTask;
