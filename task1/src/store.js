import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { tasksReducer, tasksFind, showPopup } from "./tasks/tasks.reducer";

const reducer = combineReducers({
  tasks: tasksReducer,
  find: tasksFind,
  show: showPopup,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

export default store;
