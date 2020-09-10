import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as tasksActions from "../../tasks.actions";
import "./popupEdit.scss";
import {
  showPopupSelector,
  tasksListSelector,
  getTaskSelector,
} from "../../tasks.selectors";

const PopupEdit = ({
  updateTask,
  deleteTask,
  showPopup,
  showPopupEdit,
  getTask,
}) => {
  const [state, setUpdateState] = useState({});

  const [id, setUpdateId] = useState(null);

  useEffect(() => {
    const { id } = getTask;
    setUpdateId(id);
    setUpdateState({ ...getTask });
  }, [getTask]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateState({
      ...state,
      [name]: value,
      date: Date.now(),
    });
  };

  const handleSumbit = (event) => {
    console.log(getTask);
    event.preventDefault();
    updateTask(id, state);
    showPopupEdit(false);
  };
  const handleSumbitDelete = (event) => {
    event.preventDefault();
    deleteTask(id);
    showPopupEdit(false);
  };
  const closePopup = () => {
    showPopupEdit(false);
  };

  return (
    <div className={`popap ${showPopup ? "visible" : ""}`}>
      <div className="popup-wrapper">
        <form className="popup-wrapper__form edit" onSubmit={handleSumbit}>
          <img className="edit-image" src={state.image} alt="price image"></img>
          <input
            className="popup-wrapper__form_field indentation"
            name="name"
            type="text"
            value={state.name}
            placeholder="Name"
            onChange={handleChange}
            maxLength="50"
          />
          <input
            className="popup-wrapper__form_field indentation"
            name="title"
            type="number"
            mmax="999"
            maxLength="3"
            value={state.title}
            placeholder="Price"
            onChange={handleChange}
          />
          <textarea
            rows="5"
            cols="33"
            className="popup-wrapper__form_field indentation"
            type="text"
            name="description"
            placeholder="Description"
            value={state.description}
            onChange={handleChange}
            maxLength="300"
          ></textarea>

          <input
            className="popap__form_field indentation"
            type="text"
            name="image"
            value={state.image}
            placeholder="Image"
            onChange={handleChange}
          />
          <div className="popup-wrapper__form_buttons  upgrade">
            <button
              className="popap-btn color"
              type="submit"
              onClick={handleSumbit}
            >
              upgrade
            </button>
            <button className="popap-btn color" onClick={handleSumbitDelete}>
              delete
            </button>
          </div>
        </form>
        <button className="popup-close" onClick={closePopup}>
          X
        </button>
      </div>
    </div>
  );
};
const mapState = (state) => {
  return {
    showPopup: showPopupSelector(state),
    getTaskList: tasksListSelector(state),
    getTask: getTaskSelector(state),
  };
};

const mapDispatch = {
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  showPopupEdit: tasksActions.showPopup,
};

export default connect(mapState, mapDispatch)(PopupEdit);
