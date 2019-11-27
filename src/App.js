import React, {useState} from 'react';
import './App.css';
import {createStore} from 'redux';

import {todosReducer} from "./pages/todo/reducers/todosReducer";
import Todo from "./pages/todo/components/Todo";
import ReactDOM from "react-dom";

const store = createStore(todosReducer);

let id = 1;
const App = () => {
    console.log('store.getState()', store.getState());
    const [input, setInput] = useState('');

    return (
        <div>
            <input type='text' onChange={e => setInput(e.target.value)}/>
            <button onClick={() => {
                store.dispatch({type: 'ADD_TODO', id: id, text: input, completed: false})
                id++;
            }}> ADD TODO
            </button>
            <ul>
                {store.getState().map((todo, index) => (
                    <li key={index}>
                        <Todo todo={todo} onToggle={store.dispatch.bind(this, {type: 'TOGGLE_TODO', id: todo.id})}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};
const render = () => ReactDOM.render(<App/>, document.getElementById('root'));
store.subscribe(render);
render();


export default App;
