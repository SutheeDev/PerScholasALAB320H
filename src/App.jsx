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
      <h1>Create Todo List</h1>
      <form>
        <input type="text" onChange={handleChange} value={task} />
        <button onClick={handleSubmit} className="btn add-btn">
          Add
        </button>
      </form>
      <div className="task-container">
        {tasks.map((task) => (
          <Task
            task={task}
            setTask={setTask}
            setTasks={setTasks}
            tasks={tasks}
            key={task.id}
          />
        ))}
      </div>
    </main>
  );
};
export default App;
