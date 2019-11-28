import * as actions from './../actions/actions';


const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT_COUNTER:
            return state.map(counter => {
                if (counter.id === action.id) {
                    return {
                        ...counter,
                        value: counter.value + 1
                    };
                }
                return counter;
            });
        case actions.DECREMENT_COUNTER:
            return state.map(counter => {
                if (counter.id === action.id) {
                    return {
                        ...counter,
                        value: counter.value - 1
                    };
                }
                return counter;
            });
        case actions.ADD_COUNTER:
            return [
                ...state,
                {
                    id: action.id,
                    value: 0,
                }
            ];
        case actions.REMOVE_COUNTER:
            return state.filter(counter => counter.id !== action.id);
        default:
            return state;
    }
};
