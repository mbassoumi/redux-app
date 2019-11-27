import * as todoActions from './../actions/todosActions';

const initialState = [];

const todo = (state, action) => {
    switch (action.type) {
        case todoActions.ADD_TODO.type:
            return {
                id: action.id,
                text: action.text,
                completed: action.completed,
            };
        case todoActions.TOGGLE_TODO.type:
            if (state.id === action.id) {
                return {
                    ...state,
                    completed: !state.completed
                };
            } else {
                return state;
            }
        default:
            return state;
    }
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case todoActions.ADD_TODO.type:
            console.log(state, action);
            console.log([
                ...state,
                todo(undefined, action)
            ]);
            return [
                ...state,
                todo(undefined, action)
            ];
        case todoActions.TOGGLE_TODO.type:
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};
