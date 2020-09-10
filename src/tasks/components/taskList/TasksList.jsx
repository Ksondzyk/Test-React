import React, { useEffect } from "react";
import "./taskList.scss";
import { connect } from "react-redux";
import {
  tasksListSelector,
  findTasksListSelector,
} from "../../tasks.selectors";
import * as tasksActions from "../../tasks.actions";
import Task from "./Task";

const TasksList = ({
  tasksList,
  getTasksList,
  deleteTask,
  updateTask,
  searchedValue,
}) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <ul className="list">
      {tasksList
        .filter(({ name }) => name.includes(searchedValue))
        .map((task) => (
          <Task
            key={task.id}
            {...task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
    </ul>
  );
};

const mapState = (state) => {
  return {
    tasksList: tasksListSelector(state),
    searchedValue: findTasksListSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  deleteTask: tasksActions.deleteTask,
  updateTask: tasksActions.updateTask,
};

export default connect(mapState, mapDispatch)(TasksList);
