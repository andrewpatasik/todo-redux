import React from "react";
import AddTask from "./AddTask";
import Head from "./Head";
import TaskList from "./TaskList";

const Main = () => {
  return (
    <section className="relative w-5/6 lg:w-2/5 -inset-y-48 lg:-inset-y-52 flex-1">
      <Head />
      <AddTask />
      <TaskList />
    </section>
  )
}

export default Main;
