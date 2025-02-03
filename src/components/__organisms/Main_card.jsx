import React, { useState, useEffect } from "react";
import "./Main_Card.scss";
import Image_cont from "../__molecules/Image_cont";
import Input_cont from "../__molecules/Input_cont";
import List from "../__atoms/List";

function Main_Card() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(loadedTasks);
  }, []);

  function addTaskToList(task) {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  function removeTaskFromStorage(taskToRemove) {
    const updatedTasks = tasks.filter((task) => task !== taskToRemove);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  return (
    <div className="main_card">
      <Image_cont />
      <Input_cont addTaskToList={addTaskToList} />
      <List tasks={tasks} removeTask={removeTaskFromStorage} />
    </div>
  );
}

export default Main_Card;
