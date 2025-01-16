import { useState } from "react";

const Task = ({ task, setTask, setTasks, tasks }) => {
  const [text, setText] = useState(task.task);

  const saveEdit = (e) => {
    e.preventDefault();
    setTasks(
      tasks.map((eachTask) =>
        eachTask.id === task.id
          ? { ...eachTask, isEditing: false, task: text }
          : eachTask
      )
    );
  };

  const toggleCheckbox = () => {
    setTasks(
      tasks.map((eachTask) =>
        eachTask.id === task.id
          ? { ...eachTask, isCompleted: !eachTask.isCompleted }
          : eachTask
      )
    );
  };

  return (
    <div className="task">
      {task.isEditing ? (
        <div className="task-container">
          <div className="task-title">
            <input
              type="checkbox"
              onChange={toggleCheckbox}
              checked={task.isCompleted}
            />
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="task-btn-container">
            <button className="btn task-btn" onClick={saveEdit}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="task-container">
          <div className="task-title">
            <input
              type="checkbox"
              onChange={toggleCheckbox}
              checked={task.isCompleted}
            />
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
            <button
              className="btn task-btn"
              disabled={task.isCompleted ? false : true}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Task;
