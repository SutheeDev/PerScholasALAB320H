const Task = ({ taskTitle }) => {
  return (
    <div className="task">
      <div className="task-title">
        <input type="checkbox" />
        <p>{taskTitle}</p>
      </div>
      <div className="task-btn-container">
        <button className="btn task-btn">Edit</button>
        <button className="btn task-btn" disabled={true}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default Task;
