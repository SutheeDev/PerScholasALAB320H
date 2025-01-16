const Task = ({ taskTitle, isEditing }) => {
  return (
    <div className="task">
      {isEditing ? (
        <div className="task-container">
          <div className="task-title">
            <input type="checkbox" />
            <input type="text" />
          </div>
          <div className="task-btn-container">
            <button className="btn task-btn">Save</button>
          </div>
        </div>
      ) : (
        <div className="task-container">
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
      )}
    </div>
  );
};
export default Task;
