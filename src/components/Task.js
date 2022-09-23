import React from "react";

function Task({ item, removeFromTasks }) {
  return (
    <div className="task">
      <div className="label">{item.category}</div>
      <div className="text">{item.text}</div>
      <button className="delete" value={item.text} onClick={(e) => removeFromTasks(e.target.value)}>X</button>
    </div>
  );
}

export default Task;
