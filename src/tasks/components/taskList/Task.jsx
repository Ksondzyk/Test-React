import React from "react";
import "./task.scss";
import { connect } from "react-redux";
import * as tasksActions from "../../tasks.actions";

const Task = ({
  id,
  name,
  title,
  description,
  image,
  showPopupEdit,
  getTask,
}) => {
  const handleClick = () => {
    getTask({
      id: id,
      name: name,
      title: title,
      description: description,
      image: image,
    });
    showPopupEdit(true);
  };

  return (
    <li className="list-item" value={id}>
      <img className="list-item__image" src={image} alt="price image"></img>
      <h2 className="list-item__title">{`${title} $`}</h2>
      <span className="list-item__price">{name}</span>
      <p className="list-item__description">{description}</p>
      <button onClick={handleClick} className="list-item__delete-btn">
        edit
      </button>
    </li>
  );
};

const mapDispatch = {
  showPopupEdit: tasksActions.showPopup,
  getTask: tasksActions.getTask,
};
export default connect(null, mapDispatch)(Task);
