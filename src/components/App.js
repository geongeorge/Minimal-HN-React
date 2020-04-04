import React,{useState} from 'react';
import './App.css';

import { Router} from "@reach/router"

import Nav from './utils/Nav'

import List from './Pages/List'

function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <div className="content-container container mx-auto px-4">
        <div>
          <Router>
            <List path="/" />
            <List path="/:story" />
          </Router>
        </div>
        
      </div>
    </div>
  );

}



export default App;
