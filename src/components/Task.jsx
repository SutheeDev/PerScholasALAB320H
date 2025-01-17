import { useState } from "react";

const Task = ({ task, setTasks, tasks }) => {
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

  const deleteTask = () => {
    setTasks(tasks.filter((eachTask) => eachTask.id !== task.id));
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
              className="checkbox"
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
              className="checkbox"
            />
            <p className="taskName">{task.task}</p>
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
              onClick={deleteTask}
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
