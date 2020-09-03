import React, { useState } from "react";
import TasksList from "./TasksList";
import Header from "./Header";
import Popup from "./Popup";

const TodoList = () => {
  const [show, setShowPopup] = useState(false);
  const addHotDog = (event) => {
    setShowPopup(event);
  };
  return (
    <>
      <Header showPopup={show} getPopup={addHotDog} />
      <Popup showPopup={show} getPopup={addHotDog} />
      <h1 className="title">All hot-dogs</h1>
      <main className="todo-list">
        <TasksList />
      </main>
    </>
  );
};

export default TodoList;
