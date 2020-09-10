import React, { useState } from "react";
import "./todoList.scss";
import TasksList from "./TasksList";
import Header from "../header/Header";
import Popup from "../popup/Popup";
import Search from "../search/Search";
import PopupEdit from "../popup/PopupEdit";

const TodoList = () => {
  const [show, setShowPopup] = useState(false);
  const addHotDog = (event) => {
    setShowPopup(event);
  };
  return (
    <>
      <Header showPopup={show} getPopup={addHotDog} />
      <Search />
      <Popup showPopup={show} getPopup={addHotDog} />
      <PopupEdit />
      <main className="todo-list">
        <TasksList />
      </main>
    </>
  );
};

export default TodoList;
