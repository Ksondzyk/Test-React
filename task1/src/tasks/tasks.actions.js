import * as gateWays from "./tasks.gateway";
import { tasksListSelector } from "./tasks.selectors";

export const TASKS_LIST_RECEIVED = "TASKS_LIST_RECEIVED";
export const FIND_TASKS_LIST = "FIND_TASKS_LIST";
export const SHOW_POPUP = "SHOW_POPUP";
export const GET_TASK_RECEIVED = "GET_TASK_RECEIVED";

export const getTask = (taskOne) => {
  return {
    type: GET_TASK_RECEIVED,
    task: taskOne,
  };
};

export const showPopup = (showStatus) => {
  return {
    type: SHOW_POPUP,
    show: showStatus,
  };
};

export const findTasksList = (findValue) => {
  return {
    type: FIND_TASKS_LIST,
    payload: {
      findTask: findValue,
    },
  };
};
export const tasksListReceived = (tasksList) => {
  return {
    type: TASKS_LIST_RECEIVED,
    payload: { tasksList },
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
