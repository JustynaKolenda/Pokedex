import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PokeView from './PokeView';
import { PokeDetails } from './PokeDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={`/chosen/:pokemonIndex`} component={PokeDetails} />
        <Route exact path={"/"} component={PokeView} />
      </Router>
    </div>
  );
}

export default App;
