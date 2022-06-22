import { useState } from "react";

/* eslint-disable eqeqeq */
const useTodoValue = (value) => {
  const [todoValue, setTodoValue] = useState(value);

  const handleInputChange = async (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setTodoValue(value)
  };

  return [todoValue, handleInputChange];
};

export default useTodoValue;
