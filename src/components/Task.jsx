import { useState } from "react";

// const Task = ({ taskTitle, isEditing }) => {

const Task = ({ task, setTask, setTasks, tasks }) => {
  const [text, setText] = useState(task.task);

  return (
    <div className="task">
      {/* {isEditing ? ( */}
      {task.isEditing ? (
        <div className="task-container">
          <div className="task-title">
            <input type="checkbox" />
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
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
                  tasks.map((eachTask) =>
                    eachTask.id === task.id
                      ? { ...eachTask, isEditing: true }
                      : { ...eachTask }
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
