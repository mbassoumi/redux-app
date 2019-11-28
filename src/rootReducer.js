import {combineReducers} from 'redux';
import {reducer} from './pages/counter/reducers/reducers'

export const rootReducer = combineReducers({
    counters: reducer
});
