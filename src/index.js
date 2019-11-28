import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './rootReducer';


const store = createStore(rootReducer);

const Index = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(<Index/>, document.getElementById('root'));
