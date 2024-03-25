import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Homepage from "./Homepage";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out..
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //Any cleanup operations go in here...
      unsubscribe();
    };
  }, []);

  console.log("USER IS >>>>",user)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
