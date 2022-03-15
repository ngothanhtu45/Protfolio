import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NavMenu from './components/NavMenu';
import Projects from './pages/Projects';
import Footer from './components/Footer';

import SmoothScrollBar from './components/SmoothScrollBar';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollBar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SmoothScrollBar>
      </Router>
    </>
  );
}
