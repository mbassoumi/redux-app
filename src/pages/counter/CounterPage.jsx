import React, {useReducer} from 'react';
import {reducer} from "./reducers/reducers";
import Counter from "./components/Counter";

import * as actions from './actions/actions';

const CounterPage = () => {
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <Counter
            onDecrement={dispatch.bind(this, actions.INCREMENT_COUNTER)}
            onIncrement={dispatch.bind(this, actions.DECREMENT_COUNTER)}
            value={state}
        />
    )
};


export default CounterPage;
