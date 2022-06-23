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
    <section className="my-8">
      <ul
        id="todo-list"
        className="bg-slate-700 divide-y divide-black rounded-lg"
      >
        {renderTodoTask()}
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
