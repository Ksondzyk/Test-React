import React, { useEffect } from "react";
import { connect } from "react-redux";
import { tasksListSelector } from "../tasks.selectors";
import * as tasksActions from "../tasks.actions";
import Task from "./Task";

const TasksList = ({ tasksList, getTasksList, deleteTask, updateTask }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <ul className="list">
      {tasksList.map((task) => (
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
  };
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  deleteTask: tasksActions.deleteTask,
  updateTask: tasksActions.updateTask,
};

export default connect(mapState, mapDispatch)(TasksList);
