import React from "react";
import { connect } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = ({ taskCollection }) => {
  const renderTodoTask = () => {
    if (taskCollection.length < 1) {
      return <h1>No Task Created.</h1>;
    }

    return taskCollection.map((task, index) => {
      return <TaskCard key={index} task={task}  />
    });
  };

  return (
    <section className="my-8">
      <ul className="bg-slate-700 divide-y divide-black rounded-lg">{renderTodoTask()}</ul>
    </section>
  );
};

const mapStateToProp = ({ taskCollection }) => {
  return {
    taskCollection,
  };
};

export default connect(mapStateToProp)(TaskList);
