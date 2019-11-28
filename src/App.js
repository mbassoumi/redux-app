import React from 'react';
import CounterPage, {MemorizedCounterPage} from "./pages/counter/CounterPage";


const App = (props) => {
    return (
        <div>
            <MemorizedCounterPage/>
        </div>
    );
};

export default App;
