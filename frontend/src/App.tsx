import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Car from './pages/Car';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/Car" component={Car} />
    </Router>
  );
}

export default App;
