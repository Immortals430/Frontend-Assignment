import { TiDelete } from "react-icons/ti";
import "./TaskList.css";
import { useSelector } from "react-redux";
import { tasksSelector } from "../../redux/reducers/tasks_reducer";

export default function Card({ deleteTask }) {
  const { taskList } = useSelector(tasksSelector);

  return (
    <div className="grid">
      {taskList.map(({ task }, i) => (
        <div className="card" key={i}>
          <div className="task">{task}</div>
          <TiDelete className="deleteBtn" onClick={() => deleteTask(i)} />
        </div>
      ))}
    </div>
  );
}
