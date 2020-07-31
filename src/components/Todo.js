import React from "react";

const Todo = ({ text, complete, onClick }) => {
  return (
    <li
      style={{ textDecoration: complete ? "line-through" : "none" }}
      onClick={onClick}
    >
      {text}
    </li>
  );
};

export default Todo;
