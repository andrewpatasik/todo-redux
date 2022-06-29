/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { connect } from "react-redux";
import ClearButton from "./ClearButton";
import FilterButton from "./FilterButton,";
import TaskCard from "./TaskCard";

const TaskList = ({ taskCollection }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [filterIndex, setFilterIndex] = useState(0);

  // set a function that process the filter
  const filterCollection = (collection) => {
    switch (filterIndex) {
      case 1:
        // active tasks
        return collection.filter((task) => task.checked == false);
      case 2:
        // completed tasks
        return collection.filter((task) => task.checked == true);
      default:
        // all tasks
        return collection;
    }
  };

  const renderTodoTask = () => {
    // set a container for taskCollection that display filtered collection or all collection
    let tasks = filterCollection(taskCollection);

    return tasks.map((task, index) => {
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
          <FilterButton setFilterIndex={setFilterIndex} />
          <ClearButton />
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
