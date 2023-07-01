import React, {Dispatch, SetStateAction} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';
import Body from './components/Body';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className="App">
            <Header />
      <Router>
      <Routes>
        <Route path="DylanSwift/" element={<Body />} />
      </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
