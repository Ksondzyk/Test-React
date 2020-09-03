import * as gateWays from "./tasks.gateway";
import { tasksListSelector } from "./tasks.selectors";

export const TASKS_LIST_RECEIVED = "TASKS_LIST_RECEIVED";

export const tasksListReceived = (tasksList) => {
  return {
    type: TASKS_LIST_RECEIVED,
    payload: {
      tasksList,
    },
  };
};

export const getTasksList = () => {
  return function (dispatch) {
    gateWays.fetchTasksList().then((tasksList) => {
      return dispatch(tasksListReceived(tasksList));
    });
  };
};

export const createTask = (data) => {
  const newTask = {
    ...data,
  };

  return function (dispatch) {
    gateWays.createTask(newTask).then(() => dispatch(getTasksList()));
  };
};

export const updateTask = (taskId, updateData) => (dispatch, getState) => {
  const state = getState();
  const tasksList = tasksListSelector(state);
  const newTaskList = tasksList.map((obj) => {
    if (obj.id === taskId) {
      return { id: obj.id, ...updateData };
    }
    return obj;
  });
  const task = newTaskList.find((task) => task.id === taskId);
  const updatedtask = {
    ...task,
  };
  gateWays.updateTask(taskId, updatedtask).then(() => dispatch(getTasksList()));
};

export const deleteTask = (taskId) => {
  return function (dispatch) {
    gateWays.deleteTask(taskId).then(() => dispatch(getTasksList()));
  };
};
