import logo from "./logo.png";
import "./App.css";
import LandingPage from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import fullpage from "fullpage.js";
import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Section from "./components/Section";
const App = () => (
  <ReactFullpage
    navigation
    sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <Section content={"Slide down!"} />
          <Section content={"Keep going!"} />
          <Section content={"Slide up!"} />
        </div>
      );
    }}
  />
);

export default App;
