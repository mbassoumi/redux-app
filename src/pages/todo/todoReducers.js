import {combineReducers} from 'redux';
import {todosReducer} from "./reducers/todosReducer";
import {todoFilterReducer} from "./reducers/todoFilterReducer";

export const todoReducers = combineReducers({
    todosReducer,
    todoFilterReducer
}) ;
