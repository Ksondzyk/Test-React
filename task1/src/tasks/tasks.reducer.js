import {
  TASKS_LIST_RECEIVED,
  FIND_TASKS_LIST,
  SHOW_POPUP,
} from "./tasks.actions";

const initialState = {
  tasksList: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_LIST_RECEIVED:
      return {
        ...state,
        tasksList: action.payload.tasksList,
      };
    default:
      return state;
  }
};

export const tasksFind = (state = "", action) => {
  switch (action.type) {
    case FIND_TASKS_LIST: {
      return action.payload.findTask;
    }
    default:
      return state;
  }
};

export const showPopup = (state = false, action) => {
  switch (action.type) {
    case SHOW_POPUP: {
      return action.show;
    }
    default:
      return state;
  }
};
