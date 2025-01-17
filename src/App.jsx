import { useState } from "react";
import Task from "./components/Task";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task) {
      return;
    }

    const maxId =
      tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) : 0;

    const newTask = {
      id: maxId + 1,
      task: task,
      isCompleted: false,
      isEditing: false,
    };
    setTasks([newTask, ...tasks]);
    setTask("");
  };

  return (
    <main>
      <div className="todo-container">
        <h1 className="appTitle">Create Todo List</h1>
        <form className="taskForm">
          <input
            type="text"
            onChange={handleChange}
            value={task}
            placeholder="Add your task"
          />
          <button onClick={handleSubmit} className="btn add-btn">
            Add
          </button>
        </form>
        <div className="tasks-container">
          {tasks.map((task) => (
            <Task task={task} setTasks={setTasks} tasks={tasks} key={task.id} />
          ))}
        </div>
        <p className="footer">
          Developed by
          <a href="https://www.sutheedev.com/" target="_blank">
            Suthee
          </a>
        </p>
      </div>
    </main>
  );
};
export default App;
