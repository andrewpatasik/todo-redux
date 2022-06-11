import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Head = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 id="app-logo" className="text-xl lg:text-4xl">TO DO</h1>
      <button className="text-2xl lg:text-3xl">
        <FontAwesomeIcon icon={faMoon} />
      </button>
    </div>
  )
}

export default Head;
