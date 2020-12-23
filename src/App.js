import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import NavBarComponent from "./sharedComponents/navBar/navBar";

function App() {
  return (
    <Router>
      <NavBarComponent />
      <Routes />
    </Router>
  );
}

export default App;

