import React, { useState } from "react";
import "./popup.scss";
import { connect } from "react-redux";
import * as tasksActions from "../../tasks.actions";

const Popap = ({ showPopup, getPopup, createTask }) => {
  const [state, setUpdateState] = useState({
    name: "",
    title: "",
    description: "",
    image: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateState({
      ...state,
      [name]: value,
      date: new Date(),
    });
  };
  const handleSumbit = (event) => {
    event.preventDefault();
    createTask(state);
    setUpdateState({
      name: "",
      title: "",
      description: "",
      image: "",
    });
  };

  return (
    <div className={`popap ${showPopup ? "visible" : ""}`}>
      <div className="popup-box">
        <form className="popup-box__form " onSubmit={handleSumbit}>
          <h1 className="popup-box__form_title">Add new hot-dog</h1>
          <input
            className="popup-box__form_field"
            name="name"
            type="text"
            value={state.name}
            placeholder="Name"
            maxength="50"
            onChange={handleChange}
            required
          />
          <input
            className="popup-box__form_field"
            name="title"
            type="number"
            max="999"
            maxLength="3"
            value={state.title}
            placeholder="Price"
            onChange={handleChange}
            required
          />
          <input
            className="popup-box__form_field"
            type="text"
            name="description"
            placeholder="Description"
            value={state.description}
            onChange={handleChange}
            maxLength="300"
            required
          />

          <input
            className="popup-box__form_field"
            type="text"
            name="image"
            value={state.image}
            placeholder="Image"
            onChange={handleChange}
            required
          />
          <div className="popup-box__form_buttons">
            <button className="popap-btn " type="submit">
              add
            </button>
          </div>
        </form>
        <button
          className="popup-box-btn "
          type="buttom"
          onClick={() => getPopup(!showPopup)}
        >
          no Thanks
        </button>
      </div>
    </div>
  );
};

const mapDispatch = {
  createTask: tasksActions.createTask,
};

export default connect(null, mapDispatch)(Popap);
