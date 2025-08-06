import React from "react";

export default function AddTaskForm({ addTask }) {
  return (
    <form onSubmit={addTask}>
      <input type="text" name="task" placeholder="Enter task..." />
      <button className="addTaskBtn">Add Task</button>
    </form>
  );
}
