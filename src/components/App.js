import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [filterCategory, changeClickedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  let deleteID = "";
  let filteredTasksArray = tasks;

  function removeFromTasks(deleteID) {
    setTasks((tasks) => tasks.filter((item) => item.text !== deleteID));
  }

  if (filterCategory !== "All") {
    filteredTasksArray = tasks.filter(
      (item) => item.category === filterCategory
    );
  }

  function handleCategoryClick(category) {
    changeClickedCategory(category);
  }

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        filterCategory={filterCategory}
        handleCategoryClick={handleCategoryClick}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={filteredTasksArray}
        removeFromTasks={removeFromTasks}
        deleteID={deleteID}
      />
    </div>
  );
}

export default App;
