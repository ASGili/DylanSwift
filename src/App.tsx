import React, {Dispatch, SetStateAction} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './containers/Header';
import Footer from './containers/Footer';
import Body from './containers/Body';
import Leaderboard from './containers/Leaderboard';
import './App.css';



function App() {

  return (
    <div className="App">
    <Header />
      <Router>
      <Routes>
        <Route path="/DylanSwift/" element={<Body />} />
        <Route path="/DylanSwift/Leaderboard/" element={<Leaderboard />} />
      </Routes>
      </Router>
    <Footer />
    </div>
  );
}

export default App;
