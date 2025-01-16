import { useState } from "react";
import Task from "./components/task";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  // const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      task: task,
      isCompleted: false,
      isEditing: false,
    };
    setTasks([newTask, ...tasks]);
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
        {tasks.map((task, index) => (
          <Task taskTitle={task.task} isEditing={task.isEditing} key={index} />
        ))}
      </div>
    </main>
  );
};
export default App;
