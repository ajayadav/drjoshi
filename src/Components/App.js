import React from 'react';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom/cjs/react-router-dom.min';


//Internal Imports.
import './app.css'

import Home from './Home';
import About from './About';
import Header from './Header';
import Services from './Services';


class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Route path='/' exact component={Home} />
                    <Route path='/Home' exact component={Home} />
                    <Route path='/About' exact component={About} />
                    <Route path='/Services' exact component={Services} />
                </Router>
            </div>
            
        )
    }
}

export default App;