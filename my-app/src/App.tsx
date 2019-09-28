import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PokeView from './PokeView';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} component={PokeView} />
      </Router>
    </div>
  );
}

export default App;
