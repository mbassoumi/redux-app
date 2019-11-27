import React from 'react';
import PropTypes from 'prop-types'

const Counter = ({value, onIncrement, onDecrement}) => {

    console.log('value', value);
    return (
        <div>
            <div>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
            </div>
            <h1>{value}</h1>
        </div>
    )
};


Counter.propTypes = {
    onDecrement: PropTypes.func.isRequired,
    onIncrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};
export default Counter;
