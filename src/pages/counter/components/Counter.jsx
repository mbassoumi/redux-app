import React, {memo} from 'react';
import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";
import * as actions from './../actions/actions';

const Counter = ({value, id}) => {

    const dispatch = useDispatch();

    return (
        <div style={{border: '1px solid black', margin: '10px'}}>
            <div>
                <button onClick={dispatch.bind(this, {type: actions.INCREMENT_COUNTER, id: id})}>Increment</button>
                <button onClick={dispatch.bind(this, {type: actions.DECREMENT_COUNTER, id: id})}>Decrement</button>
                <button onClick={dispatch.bind(this, {type: actions.REMOVE_COUNTER, id: id})}>Remove</button>
            </div>
            <h1>{value}</h1>
        </div>
    )
};


Counter.propTypes = {
    value: PropTypes.number.isRequired
};
export const MemorizedCounter = memo(Counter);
export default Counter;
