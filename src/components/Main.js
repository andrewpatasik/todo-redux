import React from "react";
import AddTask from "./AddTask";
import Footer from "./Footer";
import Head from "./Head";

const Main = () => {
  return (
    <section className="relative w-3/4 lg:w-2/5 -inset-y-48 lg:-inset-y-52 flex-1">
      <Head />
      <AddTask />
    </section>
  )
}

export default Main;
