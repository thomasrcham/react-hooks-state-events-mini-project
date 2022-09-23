import Task from "./Task";

function TaskList({ tasks, removeFromTasks, deleteID }) {
  return (
    <div className="tasks" key="tasks">
      {tasks.map((item) => (
        <Task
          item={item}
          removeFromTasks={removeFromTasks}
          deleteID={deleteID}
          key={item.text}
        />
      ))}
    </div>
  );
}

export default TaskList;
