import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Works from './components/Works/Works';
import HeaderNav from './components/Home/HeaderNav';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <HeaderNav></HeaderNav>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Works />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
     
    </Router>
  );
}

export default App;
