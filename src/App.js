import "./App.css";
import React from "react";
import FooterComponent from "./Components/Footer/FooterComponent";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes />
      <FooterComponent />
    </Router>
  );
}

export default App;
