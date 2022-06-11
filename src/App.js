import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="relative flex flex-col h-screen items-center inset-y-28">
      <Header />
      <Main />
    </div>
  )
}

export default App;
