import { useState } from "react";
import "./Header.scss";
import Input from "../__atoms/Input";
import Button from "../__atoms/Button";

function Input_cont({ addTaskToList }) {
  const [task, setTask] = useState("");

  function Submit(event) {
    event.preventDefault();
    if (task.trim()) {
      addTaskToList(task);
      setTask("");
    }
  }

  function Change(event) {
    setTask(event.target.value);
  }

  return (
    <form className="form" onSubmit={Submit}>
      <Input value={task} onChange={Change} />
      <Button />
    </form>
  );
}

export default Input_cont;
