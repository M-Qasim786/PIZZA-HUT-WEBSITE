import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App  ()  {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
      {/* <h1>hello</h1> */}
    </>
  );
};

export default App;
