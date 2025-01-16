import { useState } from "react";
import Task from "./components/task";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      task: task,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  return (
    <main>
      <h1>Create Todo List</h1>
      <form>
        <input type="text" onChange={handleChange} value={task} />
        <button onClick={handleSubmit} className="btn add-btn">
          Add
        </button>
      </form>
      <div className="task-container">
        {tasks.map((task) => (
          <Task />
        ))}
      </div>
    </main>
  );
};
export default App;
