import React, { useState } from "react";
import { connect } from "react-redux";
import * as tasksActions from "../tasks.actions";

const Popap = ({ showPopup, getPopup, createTask }) => {
  const [state, setUpdateState] = useState({
    name: "",
    title: "",
    description: "",
    image: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateState({
      ...state,
      [name]: value,
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
    getPopup(!showPopup);
  };

  return (
    <div className={`popap ${showPopup ? "visible" : null}`}>
      <form className="popap__form " onSubmit={handleSumbit}>
        <h1 className="popap__form_title">Add new hot-dog</h1>
        <input
          className="popap__form_field"
          name="name"
          type="text"
          value={state.name}
          placeholder="Name"
          maxength="50"
          onChange={handleChange}
        />
        <input
          className="popap__form_field"
          name="title"
          type="number"
          max="999"
          maxLength="3"
          value={state.title}
          placeholder="Price"
          onChange={handleChange}
        />
        <input
          className="popap__form_field"
          type="text"
          name="description"
          placeholder="Description"
          value={state.description}
          onChange={handleChange}
          maxLength="300"
        />

        <input
          className="popap__form_field"
          type="text"
          name="image"
          value={state.image}
          placeholder="Image"
          onChange={handleChange}
        />
        <div className="popap__form_buttons">
          <button
            className="popap-btn "
            type="submit"
            onClick={() => getPopup(!showPopup)}
          >
            no Thanks
          </button>
          <button className="popap-btn " onClick={handleSumbit}>
            add
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatch = {
  createTask: tasksActions.createTask,
};

export default connect(null, mapDispatch)(Popap);
