import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Head = () => {
  return (
    <div className="flex justify-between items-center mb-12">
      <h1 id="app-logo" className="text-2xl lg:text-4xl">TO DO</h1>
      <button className="text-2xl lg:text-3xl">
        <FontAwesomeIcon icon={faSun} />
      </button>
    </div>
  )
}

export default Head;
