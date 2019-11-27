import PropTypes from 'prop-types'
import React from 'react';


const Todo = ({todo, onToggle}) => {

    return (
        <div id={todo.id} onClick={onToggle}>
            <h3 style={todo.completed ? {textDecoration: 'line-through'} : {}}>{todo.text} </h3>
        </div>
    )
};

export default Todo;

Todo.propTypes = {
    onToggle: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
};
