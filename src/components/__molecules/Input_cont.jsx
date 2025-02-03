import React, { useState } from "react";
import "./Header.scss";
import Input from "../__atoms/Input";
import Button from "../__atoms/Button";

function Input_cont({ addTaskToList }) {
  const [task, setTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (task.trim()) {
      addTaskToList(task);
      setTask("");
    }
  }

  function handleChange(event) {
    setTask(event.target.value);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input value={task} onChange={handleChange} />
      <Button />
    </form>
  );
}

export default Input_cont;
