import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/js/all.min.js";

function App({items}) {
  return React.createElement(
      <Route index element = {<header />} >
        <Route path = "projects" element = {<Projects />} />
        <Route path = "about" element = {<About />} />
        <Route path = "*" element = {<NotFound />} />
      </Route>
    )
}

export default App;