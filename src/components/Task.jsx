const Task = () => {
  return (
    <div className="task">
      <div className="task-title">
        <input type="checkbox" />
        <p>Task</p>
      </div>
      <div className="task-btn-container">
        <button className="btn task-btn">Edit</button>
        <button className="btn task-btn">Delete</button>
      </div>
    </div>
  );
};
export default Task;
