import * as actions from './../actions/actions';


const initialState = 0;

export const reducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case actions.INCREMENT_COUNTER.type:
            newState = state + 1;
            break;
        case actions.DECREMENT_COUNTER.type:
            newState = state - 1;
            break;
        case actions.ADD_COUNTER.type:
        case actions.REMOVE_COUNTER.type:
        default:
            newState = state;
            break;
    }
    return newState;
};
