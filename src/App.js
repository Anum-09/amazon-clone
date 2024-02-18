import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Login from './Login';
import Homepage from './Homepage';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
         <div className="App">
      <Routes>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
    </div>
    </Router>

   
  );
}

export default App;
