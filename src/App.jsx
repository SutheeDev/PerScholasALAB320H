import Task from "./components/task";

const App = () => {
  return (
    <main>
      <h1>Create Todo List</h1>
      <form>
        <input type="text" />
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
