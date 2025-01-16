// const Task = ({ taskTitle, isEditing }) => {
const Task = ({ task, setTasks, tasks }) => {
  return (
    <div className="task">
      {/* {isEditing ? ( */}
      {task.isEditing ? (
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
            {/* <p>{taskTitle}</p> */}
            <p>{task.task}</p>
          </div>
          <div className="task-btn-container">
            <button
              className="btn task-btn"
              onClick={() =>
                setTasks(
                  tasks.map((task) =>
                    task.index === index
                      ? { ...task, isEditing: true }
                      : { ...task }
                  )
                )
              }
            >
              Edit
            </button>
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
