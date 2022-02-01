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
import Contact from './Contact';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (     
            <Router>
                <Header />
                <Route path='/' exact component={Home} />
                <Route path='/Home' component={Home} />
                <Route path='/About' component={About} />
                <Route path='/Services' component={Services} />
                <Route path='/Contact' component={Contact} />
                <Footer />
            </Router>           
        )
    }
}

export default App;