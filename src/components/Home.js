import React from 'react';
import '../App.css';

function Home() {
  return React.createElement(
      "div", 
      { className: "App"}, 
      React.createElement("h1", null, "Hello World")
    )
}

export default Home;