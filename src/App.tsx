import React from 'react';
import './App.css';

import RoutingPaths from './routingPaths';
import { Link } from 'react-router-dom';
function App() {
  return (
    <>
      <div>
        <ul>
          <li ><Link to="/">Home</Link></li>
          <li ><Link to="/about">About</Link></li>
        </ul>
      </div>
      <hr />
      <RoutingPaths/>
    </>
  );
}

export default App;
