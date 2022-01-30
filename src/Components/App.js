import React from 'react';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';



//Internal Imports.
import reducer from '../Reducers';


const store = createStore(reducer,applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <Provider store = {store}>
                <div>
                    Test
                </div>
            </Provider>
        )
    }
}

export default App;