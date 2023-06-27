import React, {Dispatch, SetStateAction} from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';
import Body from './components/Body';


function App() {

  return (
    <div className="App">
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}

export default App;
