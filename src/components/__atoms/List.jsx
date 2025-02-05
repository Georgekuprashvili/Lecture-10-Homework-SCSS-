import "./Section.scss";
import photo3 from "../../assets/akar-icons_trash-can.svg";

function List({ tasks, removeTask }) {
  function Remove(task) {
    removeTask(task);
  }

  return (
    <ul>
      {tasks.map((task, key) => (
        <li key={key}>
          <div className="task-info">
            <span className="task-text">{task}</span>
            <span className="date">{new Date().toLocaleString()}</span>
          </div>
          <div className="checkbox__container">
            <input className="checkbox" type="checkbox" />
            <button className="delete" onClick={() => Remove(task)}>
              <img src={photo3} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
