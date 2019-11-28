import * as actions from './../actions/todoFilterActions';

const initialState = actions.SHOW_ALL;

export const todoFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SHOW_ALL:
            return actions.SHOW_ALL;
        case actions.SHOW_ACTIVE:
            return actions.SHOW_ACTIVE;
        case actions.SHOW_COMPLETED:
            return actions.SHOW_COMPLETED;
        default:
            return state;
    }
};
