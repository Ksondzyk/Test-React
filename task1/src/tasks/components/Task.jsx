import React, { useState } from "react";
import PopupEdit from "./PopupEdit";

const Task = ({
  id,
  updateTask,
  name,
  title,
  description,
  image,
  deleteTask,
}) => {
  const [showEdit, setShowPopupEdit] = useState(false);
  const editHotDog = (event) => {
    setShowPopupEdit(event);
  };
  const updateData = { name, title, description, image };
  return (
    <>
      <PopupEdit
        showEdit={showEdit}
        id={id}
        updateTask={updateTask}
        deleteTask={deleteTask}
        updateData={updateData}
        editHotDog={editHotDog}
      />
      <li className="list-item" value={id}>
        <img className="list-item__image" src={image} alt="price image"></img>
        <h2 className="list-item__title">{`${title} $`}</h2>
        <span className="list-item__price">{name}</span>
        <p className="list-item__description">{description}</p>
        <button
          onClick={() => editHotDog(!showEdit)}
          className="list-item__delete-btn"
        >
          edit
        </button>
      </li>
    </>
  );
};

export default Task;
