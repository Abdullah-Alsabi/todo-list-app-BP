// 1. import createStore, combineReducers from redux
import { createStore, combineReducers } from "redux";
// 2. import the reducer from its file location.
import tasks from "./tasks/tasks";

// 3. Define a variable called "reducers", we will use to store all the reducers functions with the combineReducers method.
// const reducers = combineReducers({ tasks });

// since we have only one reducer so we don't need to use the combineReducers method.
const reducers = tasks;
// 4. Declare a variable called "store" and set it equal the method "createStore" and pass the reducers variable as a value as you invoque it.
const store = createStore(reducers);

export default store;
