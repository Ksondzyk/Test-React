import React from "react";
import { connect } from "react-redux";
import * as tasksActions from "../../tasks.actions";

const Task = ({ id, name, title, description, image, showPopupEdit }) => {
  const handleClick = (id1) => {
    console.log(id1);
    showPopupEdit(true);
  };

  return (
    <li className="list-item" value={id}>
      <img className="list-item__image" src={image} alt="price image"></img>
      <h2 className="list-item__title">{`${title} $`}</h2>
      <span className="list-item__price">{name}</span>
      <p className="list-item__description">{description}</p>
      <button onClick={() => handleClick(id)} className="list-item__delete-btn">
        edit
      </button>
    </li>
  );
};

const mapDispatch = {
  showPopupEdit: tasksActions.showPopup,
};
export default connect(null, mapDispatch)(Task);
