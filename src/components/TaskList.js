import React, { useState } from "react";
import { connect } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = ({ taskCollection }) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const renderTodoTask = () => {
    return taskCollection.map((task, index) => {
      return (
        <TaskCard
          key={index}
          task={task}
          todoIndex={index}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      );
    });
  };

  return (
    <section className="mt-8 max-h-96">
      <ul
        id="todo-list"
        className="bg-slate-700 divide-y divide-black rounded-lg"
      >
        {renderTodoTask()}
        <section className="flex justify-between items-center text-xs font-bold text-slate-500 p-4">
          <p>{taskCollection.length} items left</p>
          <article className="flex justify-evenly gap-2">
            {/* this is filter */}
            <div>All</div>
            <div>Active</div>
            <div>Completed</div>
          </article>
          <button>Clear completed</button>
        </section>
      </ul>
    </section>
  );
};

const mapStateToProp = ({ taskCollection }) => {
  return {
    taskCollection,
  };
};

export default connect(mapStateToProp)(TaskList);
