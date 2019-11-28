import React, {useRef} from 'react';
import './App.css';
import {createStore} from 'redux';

import Todo from "./pages/todo/components/Todo";
import ReactDOM from "react-dom";
import FilterLink from "./pages/todo/components/FilterLink";
import {todoReducers} from "./pages/todo/todoReducers";

const store = createStore(todoReducers);

let id = 1;
const App = (props) => {
    console.log('store.getState()', store.getState());
    const inputElement = useRef(null);
    console.log('inputElement', inputElement);

    const getTodoList = (todos, filter) => {
        switch (filter) {
            case 'SHOW_ACTIVE':
                return todos.filter(todo => todo.completed === false).map((todo, index) => (
                    <li key={index}>
                        <Todo todo={todo} onToggle={store.dispatch.bind(this, {type: 'TOGGLE_TODO', id: todo.id})}/>
                    </li>
                ));
            case 'SHOW_COMPLETED':
                return todos.filter(todo => todo.completed === true).map((todo, index) => (
                    <li key={index}>
                        <Todo todo={todo} onToggle={store.dispatch.bind(this, {type: 'TOGGLE_TODO', id: todo.id})}/>
                    </li>
                ));
            case 'SHOW_ALL':
            default:
                return todos.map((todo, index) => (
                    <li key={index}>
                        <Todo todo={todo} onToggle={store.dispatch.bind(this, {type: 'TOGGLE_TODO', id: todo.id})}/>
                    </li>
                ));

        }
    };

    // console.log('store.getState().todosReducer, store.getState().todoFilterReducer', store.getState().todosReducer, store.getState().todoFilterReducer);
    const todosList = getTodoList(store.getState().todosReducer, store.getState().todoFilterReducer);
    return (
        <div>
            <input type='text' ref={inputElement}/>
            <button onClick={() => {
                store.dispatch({type: 'ADD_TODO', id: id, text: inputElement.current.value, completed: false})
                id++;
            }}> ADD TODO
            </button>

            <ul>
                {todosList}
            </ul>

            <FilterLink onClick={store.dispatch.bind(this, {
                type: 'SHOW_ALL'
            })}>
                SHOW_ALL
            </FilterLink>
            <FilterLink onClick={store.dispatch.bind(this, {
                type: 'SHOW_ACTIVE'
            })}>
                SHOW_ACTIVE
            </FilterLink>
            <FilterLink onClick={store.dispatch.bind(this, {
                type: 'SHOW_COMPLETED'
            })}>
                SHOW_COMPLETED
            </FilterLink>

        </div>
    );
};
const render = () => ReactDOM.render(<App/>, document.getElementById('root'));
store.subscribe(render);
render();


export default App;
