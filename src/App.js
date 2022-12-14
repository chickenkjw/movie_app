import React from "react";
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './route/About'
import Home from "./route/Home";

function App (){
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;