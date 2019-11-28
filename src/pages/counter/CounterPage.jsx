import React, {memo, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Counter, {MemorizedCounter} from "./components/Counter";

import * as actions from './actions/actions';

let id = 1;

const getCounterList = (counters, decrementCounter, incrementCounter) => (
    counters.map(counter => (
            <MemorizedCounter
                key={counter.id}
                id={counter.id}
                value={counter.value}
            />
        )
    )
);


const CounterPage = () => {
    const counters = useSelector(state => state.counters);
    console.log('counters', counters);
    const dispatch = useDispatch();

    const incrementCounter = useCallback(
        () => dispatch({type: actions.INCREMENT_COUNTER}),
        [dispatch]
    );

    const decrementCounter = useCallback(
        () => dispatch({type: actions.DECREMENT_COUNTER}),
        [dispatch]
    );


    return (
        <div>
            {getCounterList(counters, incrementCounter, decrementCounter)}
            <div>
                <button onClick={() => dispatch({type: actions.ADD_COUNTER, id: id++})}>Add Counter</button>
            </div>
        </div>
    )
};

export const MemorizedCounterPage = memo(CounterPage);
export default CounterPage;
