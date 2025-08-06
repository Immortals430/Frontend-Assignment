import TaskList from "../../Components/TaskList/TaskList";
import AddTaskForm from "../../Components/AddTaskForm/AddTaskForm";
import { useDispatch } from "react-redux";
import { ADD_TASK, DELETE_TASK } from "../../redux/reducers/tasks_reducer";
import "./Todopage.css";

export default function Todopage() {
  const dispatch = useDispatch();

  // add task
  const addTask = (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    dispatch(ADD_TASK({ task }));
  };

  // delete task
  const deleteTask = (index) => {
    dispatch(DELETE_TASK(index));
  };

  return (
    <main className="todopage">
      <div className="heading">
        <h1>Todo App</h1>
        <AddTaskForm addTask={addTask} />
      </div>

      <TaskList deleteTask={deleteTask} />
    </main>
  );
}
