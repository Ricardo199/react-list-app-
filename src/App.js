import React from 'react';
import './App.css';

function App({items}) {
  return React.createElement(
      "ul", 
      { className: "ingredients"}, 
      items.map((ingredient, index)=>{
        return React.createElement("li", {key: index}, ingredient)
      })
    )
}

export default App;

