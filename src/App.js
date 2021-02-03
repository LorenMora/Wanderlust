import React from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';
import About from './components/pages/About';
import Adventures from './components/pages/Adventures';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop.js';

export default function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <ScrollToTop />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/adventures' component={Adventures} />
                <Route path='/contact' component={Contact} />
                <Route path='/sign-up' component={SignUp} />
            </Switch>
            <Footer />
        </Router>
    </div>
  );
};