import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="relative flex flex-col h-screen items-center bg-gray-900 text-white">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
