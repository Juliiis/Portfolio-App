import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import contactme from "./Components/contactme";
import proyects from "./Components/proyects";
import aboutme from "./Components/aboutme";
import home from "./Components/home";
import "./App.css";


  function App() {
    return (
      <Router>
        <div>
          <header>
          <nav>
            <Link to="/">Julieta Martin</Link>
            <ul>
              <li>
                <Link to="/proyects">Proyects</Link>
              </li>
              <li>
                <Link to="/about-me">About me</Link>
              </li>
              <li>
                <Link to="/contact-me">Contact me</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            </nav>
          </header>
          <body>
            <Switch>
              <Route path="/contact-me" component={contactme}/>
              <Route path="/proyects" component={proyects} />
              <Route path="/about-me" component={aboutme} />
              <Route path="/" component={home} exact/>
            </Switch>
          </body>
          <footer className="footer">
            <strong>
               Made by Julieta Martin &#10084; 2020
            </strong>
          </footer>
        </div>
      </Router>
      
    )
  } 
  export default App;

