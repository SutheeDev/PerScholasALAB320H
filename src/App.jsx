import { useState } from "react";
import Task from "./components/task";

const App = () => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <main>
      <h1>Create Todo List</h1>
      <form>
        <input type="text" onChange={handleChange} />
        <button className="btn add-btn">Add</button>
      </form>
      <div className="task-container">
        <Task />
        <Task />
        <Task />
      </div>
    </main>
  );
};
export default App;
