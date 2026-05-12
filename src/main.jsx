import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const items = [
  "1 cup unsalted butter, at room temperature",
  "1 cup sugar",
  "1/2 cup brown sugar",
  "2 large eggs",
  "1 tsp vanilla extract",
  "3 cups all-purpose flour",
  "1 tsp baking soda",
  "1/2 tsp baking powder",
  "1/2 tsp salt",
  "1 cup milk",
  "2 cups chocolate chips"
];

const products = [
  "Car",
  "Butter",
  "Meat",
  "sugar",
  "eggs",
  "flour",
  "powder",
  "salt"
];
root.render(
  <React.StrictMode>
    <App items={items} />
    <App items={products} />
  </React.StrictMode>
);
