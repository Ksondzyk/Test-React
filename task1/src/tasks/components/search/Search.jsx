import React, { useState } from "react";
import "./search.scss";
import { connect } from "react-redux";
import * as tasksActions from "../../tasks.actions";
import { findTasksListSelector } from "../../tasks.selectors";

const Search = ({ findTask }) => {
  const [state, setFindState] = useState({
    inputFind: "",
  });
  const handleChange = (event) => {
    setFindState({
      inputFind: event.target.value,
    });
  };
  findTask(state.inputFind);

  return (
    <div className="search">
      <input
        className="search__field"
        type="text"
        value={state.inputFind}
        onChange={handleChange}
        placeholder="Find product"
      />
    </div>
  );
};
const mapState = (state) => {
  return { findList: findTasksListSelector(state) };
};
const mapDispatch = {
  findTask: tasksActions.findTasksList,
};

export default connect(mapState, mapDispatch)(Search);
