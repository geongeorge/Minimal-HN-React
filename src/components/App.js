import React,{useState} from 'react';
import './App.css';

import { Router} from "@reach/router"

import Nav from './utils/Nav'

import Home from './Pages/Home'
import Show from './Pages/Show'

function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <div className="content-container container mx-auto px-4">
        <div>
          <Router>
            <Home path="/" />
          <Show path="show" />
          </Router>
        </div>
        
      </div>
    </div>
  );

}



export default App;
