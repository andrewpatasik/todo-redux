/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { connect } from "react-redux";
import useWindowSize from "../hooks/useWindowSize";
import ClearButton from "./ClearButton";
import FilterButton from "./FilterButton,";
import TaskCard from "./TaskCard";

const TaskList = ({ taskCollection }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [filterIndex, setFilterIndex] = useState(0);
  const [width] = useWindowSize();

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

  const countTaskLeft = (collection) => {
    return collection.filter((task) => task.checked == false).length;
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
    <section className="relative mt-8 ">
      <ul
        id="todo-list"
        className="bg-slate-700 divide-y divide-black rounded-lg"
      >
        {renderTodoTask()}
        <section
          id="widget"
          className="flex justify-between items-center text-xs font-bold text-slate-500 p-4"
        >
          <p>{`${countTaskLeft(taskCollection)} items left`}</p>
          {/* should render if screen is > 961 */}
          {width >= 961 ? (
            <FilterButton
              filterIndex={filterIndex}
              setFilterIndex={setFilterIndex}
            />
          ) : (
            ""
          )}
          <ClearButton />
        </section>
      </ul>
      {/* should render if screen is > 320 and < 961 */}
      {width >= 320 && width <= 961 ? (
        <div className="absolute w-full inset-x-0 -bottom-20 bg-slate-700 divide-y divide-black rounded-lg">
          <section className="flex justify-center items-center text-md font-bold text-slate-500 p-4">
            <FilterButton
              filterIndex={filterIndex}
              setFilterIndex={setFilterIndex}
            />
          </section>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

const mapStateToProp = ({ taskCollection }) => {
  return {
    taskCollection,
  };
};

export default connect(mapStateToProp)(TaskList);
